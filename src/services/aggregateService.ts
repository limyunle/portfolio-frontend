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

  // use cache
  if (cachedData && lastFetchTime && now - lastFetchTime < Number(config.AGGREGATE_CACHE_TTL_MS)) {
    return cachedData;
  }

  const response = await fetch(`${config.BACKEND_API_BASE_URL}/aggregate/stats`);
  if (!response.ok) {
    throw new Error("Failed to fetch aggregate stats");
  }

  const data: CombinedStats = await response.json();
  cachedData = data;
  lastFetchTime = now;

  return data;
}

export async function fetchRepos(): Promise<Repo[]> {
  const data = await fetchAggregateStats();
  return data.githubRepos;
}

export async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  const data = await fetchAggregateStats();
  return data.leetcodeStats;
}
