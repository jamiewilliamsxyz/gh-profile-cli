import React, {useState} from 'react';
import {Text} from 'ink';
import SearchInput from './components/SearchInput.js';
import LoadingDisplay from './components/LoadingDisplay.js';

const App = () => {
	const [currentPhase, setCurrentPhase] = useState<
		'search' | 'loading' | 'results'
	>('search');

	const handleSubmit = () => {
		setCurrentPhase('loading');
	};

	return (
		<>
			<Text>
				Welcome to <Text color="#A7C7E7">Github Profile CLI</Text>
			</Text>
			{currentPhase === 'search' && <SearchInput onSubmit={handleSubmit} />}
			{currentPhase === 'loading' && <LoadingDisplay />}
		</>
	);
};

export default App;
