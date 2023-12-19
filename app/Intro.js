import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import MyThree from './MyThree';

export default function Intro() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on component mount
    setFadeIn(true);
  }, []);

  return (
    <Container
      style={{
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        scrollSnapAlign: 'start',
        // Add scroll snap align property
        opacity: fadeIn ? 1 : 0, // Set opacity based on the fade-in state
        transition: 'opacity 1s ease-in-out', // Add transition for opacity
      }}
    >
      <Typography variant="h2" sx={{ padding: '10px', overflow: 'hidden' }}>
        Hi, I&apos;m Boon Jhee.
      </Typography>
      <Typography variant="body1" sx={{ padding: '10px' }}>
        I&apos;m a sophomore Computer Science student currently interested in data science and its applications. Here are some of my work!
      </Typography>
      <Typography variant="body2" sx={{ padding: '10px' }}>
        Scroll down to see more!
      </Typography>
    </Container>
  );
}
