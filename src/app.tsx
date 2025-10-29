import React, {useState} from 'react';
import {Text} from 'ink';
import SearchInput from './components/SearchInput.js';

export default function App() {
	const [currentPhase] = useState<'search' | 'loading' | 'results'>('search');

	return (
		<>
			<Text>
				Welcome to <Text color="#A7C7E7">Github Profile CLI</Text>
			</Text>
			{currentPhase === 'search' && <SearchInput />}
		</>
	);
}
