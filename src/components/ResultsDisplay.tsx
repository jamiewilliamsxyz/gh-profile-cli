import React from 'react';
import {Text} from 'ink';
import {GithubProfile} from '../types.js';

const ResultsDisplay = ({profileData}: {profileData: GithubProfile}) => {
	return <Text>{JSON.stringify(profileData, null, 2)}</Text>;
};

export default ResultsDisplay;
