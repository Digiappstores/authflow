import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './index.css';
import App from './App';
import { customTheme } from './theme/light/customTheme';
import { render } from 'react-dom';

const root = document.getElementById("root");

render(<>
  <ThemeProvider theme={customTheme} >
    <CssBaseline />
    <App />
  </ThemeProvider>
</>, root);
