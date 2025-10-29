import React, {useState} from 'react';
import {Box} from 'ink';
import TextInput from 'ink-text-input';

interface Props {
	onSubmit: (query: string) => void;
}

const SearchInput = ({onSubmit}: Props) => {
	const [query, setQuery] = useState('');

	return (
		<Box>
			<TextInput
				value={query}
				onChange={setQuery}
				onSubmit={onSubmit}
				placeholder="Enter a GitHub username..."
			/>
		</Box>
	);
};

export default SearchInput;
