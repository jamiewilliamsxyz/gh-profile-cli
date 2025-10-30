import {useState, useCallback} from 'react';
import {QueryType, GithubProfile} from '../types.js';

type LoadingType = boolean;
type ErrorType = string | null;

interface UseGithubProfileReturn {
	getProfile: (query: QueryType) => Promise<GithubProfile | null>;
	loading: boolean;
	error: ErrorType;
}

export const useGithubProfile = (): UseGithubProfileReturn => {
	const [loading, setLoading] = useState<LoadingType>(false);
	const [error, setError] = useState<ErrorType>(null);

	const getProfile = useCallback(
		async (query: QueryType): Promise<GithubProfile | null> => {
			setLoading(true);
			setError(null);
			try {
				const res = await fetch(`https://api.github.com/users/${query}`);

				if (!res.ok) {
					setError(`GitHub API Error: ${res.status} ${res.statusText}`);
					return null;
				}

				const data: GithubProfile = await res.json();
				return data;
			} catch (err) {
				setError(
					`Fetch failed: ${
						err instanceof Error ? err.message : 'Unknown error'
					}`,
				);
				return null;
			} finally {
				setLoading(false);
			}
		},
		[],
	);

	return {getProfile, loading, error};
};

/* To Do
	- Validate input
	- Check cache
	- Fetch results from API if not cached
	- Cache API results
	- Return error
*/
