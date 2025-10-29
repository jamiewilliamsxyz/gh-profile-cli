import React, {useState} from 'react';
import {Text} from 'ink';
import SearchInput from './components/SearchInput.js';
import LoadingDisplay from './components/LoadingDisplay.js';
import ResultsDisplay from './components/ResultsDisplay.js';

const App = () => {
	const [currentPhase, setCurrentPhase] = useState<
		'search' | 'loading' | 'results'
	>('search');

	const [username, setUsername] = useState<string>('');

	// Make this async
	const handleSubmit = (query: string) => {
		setUsername(query);
		setCurrentPhase('loading');
		// Await profile data, passing in the username
		setCurrentPhase('results');
	};

	return (
		<>
			<Text>
				Welcome to <Text color="#A7C7E7">Github Profile CLI</Text>
			</Text>
			{currentPhase === 'search' && <SearchInput onSubmit={handleSubmit} />}
			{currentPhase === 'loading' && <LoadingDisplay />}
			{currentPhase === 'results' && <ResultsDisplay profileData={username} />}
		</>
	);
};

export default App;
