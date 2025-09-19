export interface Repo {
  name: string;
  html_url: string;
}

export async function fetchRepos(): Promise<Repo[]> {
  const response = await fetch("http://localhost:8080/github/repos");
  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }
  return response.json();
}
