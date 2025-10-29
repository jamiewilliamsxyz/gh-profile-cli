import React from 'react';
import {Text} from 'ink';

interface Props {
	profileData: string;
}

const ResultsDisplay = ({profileData}: Props) => {
	return <Text>{profileData}</Text>;
};

export default ResultsDisplay;
