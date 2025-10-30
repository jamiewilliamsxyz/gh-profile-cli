export type QueryType = string;

export interface GithubProfile {
	html_url: string;
	login: string;
	name: string | null;
	bio: string | null;
	created_at: string;
	blog: string | null;
	followers: number;
	following: number;
	public_repos: number;
}
