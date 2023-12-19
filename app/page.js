"use client";

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Image from 'next/image';
import Works from './Works';
import Intro from './Intro';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#e63946', // Replace with your custom primary color
    },
    secondary: {
      main: '#457b9d', // Replace with your custom secondary color
    },
    text: {
      primary: '#24436D',
      secondary: '#14213dee', // Replace with your custom text color
    },
    background: {
      default: '#f1faee',
      paper: '#F5FBF3', // Replace with your custom background color
    },
  },
  // Add more customizations as needed
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Intro />
        <Works />
      </main>
    </ThemeProvider>
  );
}
