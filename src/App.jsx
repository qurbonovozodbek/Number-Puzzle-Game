import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import PuzzleBoard from './components/PuzzleBoard';
import GameInfo from './components/GameInfo';
import './App.css'

const lightTheme = {
  background: '#cdcdcd',
  color: '#0db54d',
  tileBg: '#ffffff',
  tileColor: '#0db54d',
};

const darkTheme = {
  background: '#000000',
  color: '#ff00d0',
  tileBg: '#4b4a50',
  tileColor: '#fffb00',
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.3s ease;

  @media (max-width: 480px) {
    padding: 10px;
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 15px;
  }

  @media (min-width: 769px) {
    padding: 20px;
  }
`;

const ToggleButton = styled.button`

  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.tileBg};
  color: ${({ theme }) => theme.tileColor};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.tileBg};
  }
`;

const NavLinks = styled.nav`
  margin-bottom: 20px;

  a {
    margin: 0 10px;
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

    &:hover {
      transition: all 0.3s ease-in-out;
      text-decoration: underline;
    }
  }
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <AppContainer>
          <Header>Puzzle Game</Header>
          <NavLinks>
            <Link to="/">Game</Link>
            <Link to="/info">About</Link>
          </NavLinks>
          <Routes>
            <Route path="/" element={<PuzzleBoard />} />
            <Route path="/info" element={<GameInfo />} />
          </Routes>
          <ToggleButton onClick={() => setDarkMode(!darkMode)}>
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </ToggleButton>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
