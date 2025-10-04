export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  submissionCalendar: { [timestamp: string]: number };
}

export async function fetchLeetCodeStats(): Promise<LeetCodeStats> {
  const response = await fetch("http://localhost:8080/leetcode/stats");
  if (!response.ok) {
    throw new Error("Failed to fetch LeetCode stats");
  }
  return response.json();
}
