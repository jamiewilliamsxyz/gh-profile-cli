#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

meow(`Help message on "gh-profile-cli --help"	`, {importMeta: import.meta});

render(<App />);
