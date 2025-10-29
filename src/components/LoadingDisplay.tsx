import React from 'react';
import {Box, Text} from 'ink';
import Spinner from 'ink-spinner';

const LoadingDisplay = () => {
	return (
		<Box>
			<Box marginRight={1}>
				<Spinner type="dots" />
			</Box>
			<Text color="#A7C7E7">Loading</Text>
		</Box>
	);
};

export default LoadingDisplay;
