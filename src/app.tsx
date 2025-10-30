import React, {useState, useEffect} from 'react';
import {Text} from 'ink';
import {useGithubProfile} from './hooks/useGithubProfile.js';
import SearchInput from './components/SearchInput.js';
import LoadingDisplay from './components/LoadingDisplay.js';
import ResultsDisplay from './components/ResultsDisplay.js';
import type {QueryType, GithubProfile} from './types.js';

const App = () => {
	const {getProfile, loading, error} = useGithubProfile();
	const [profileData, setProfileData] = useState<GithubProfile | null>(null);
	const [username, setUsername] = useState<QueryType>('');

	const handleSubmit = (query: QueryType) => {
		setUsername(query);
		setProfileData(null); // Resetting previous result
	};

	useEffect(() => {
		if (!username) return; // Return on inital render

		const fetchProfile = async () => {
			const data = await getProfile(username);
			setProfileData(data);
		};

		fetchProfile();
	}, [username]);

	if (loading) return <LoadingDisplay />;
	if (error) return <Text color="#FF746C">{error}</Text>;

	return (
		<>
			<Text>
				Welcome to <Text color="#A7C7E7">Github Profile CLI</Text>
			</Text>

			{!username && <SearchInput onSubmit={handleSubmit} />}
			{profileData && <ResultsDisplay profileData={profileData} />}
		</>
	);
};

export default App;
