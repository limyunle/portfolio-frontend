import { config } from "../config";

export interface Repo {
  name: string;
  html_url: string;
}

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  submissionCalendar: { [timestamp: string]: number };
}

export interface CombinedStats {
  githubRepos: Repo[];
  leetcodeStats: LeetCodeStats;
  fetchedAt: string;
}

let cachedData: CombinedStats | null = null;
let lastFetchTime: number | null = null;

export async function fetchAggregateStats(): Promise<CombinedStats> {
  const now = Date.now();

  if (cachedData && lastFetchTime && now - lastFetchTime < Number(config.AGGREGATE_CACHE_TTL_MS)) {
    return cachedData;
  }

  try {
    const response = await fetch(`${config.BACKEND_API_BASE_URL}/aggregate/stats`);

    let data: any;
    try {
      data = await response.json();
    } catch (parseError) {
      const text = await response.text();
      console.warn("Non-JSON response received:", text);
      throw new Error(`Unexpected response format: ${text}`);
    }

    if (!response.ok) {
      const message = data?.error || `Backend returned ${response.status}`;
      throw new Error(message);
    }

    const combinedData = data as CombinedStats;
    console.log("combinedData: " + JSON.stringify(combinedData));
    cachedData = combinedData;
    lastFetchTime = now;

    return combinedData;
  } catch (error) {
    console.error("Failed to fetch aggregate stats:", error);
    throw new Error("Unable to load portfolio stats. Please try again later.");
  }
}

export async function fetchRepos(): Promise<Repo[]> {
  const data = await fetchAggregateStats();

  if (!Array.isArray(data.githubRepos)) {
    throw new Error("Unable to load GitHub stats. Please try again later.");
  }

  return data.githubRepos;
}

export async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  const data = await fetchAggregateStats();

  const stats = data.leetcodeStats;
  if (!stats || typeof stats !== "object" || typeof stats.totalSolved !== "number") {
    throw new Error("Unable to load LeetCode stats. Please try again later.");
  }

  return data.leetcodeStats;
}
