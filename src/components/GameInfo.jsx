import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.tileBg};
  color: ${({ theme }) => theme.tileColor};
  border-radius: 12px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const GameInfo = () => {
  return (
    <InfoContainer>
      <Title>About the Puzzle Game</Title>
      <Paragraph>
        This puzzle game challenges you to arrange the tiles in the correct
        order. Slide the tiles into the empty space to complete the puzzle.
        The game is designed to be both engaging and visually appealing, with
        premium styles and smooth animations.
      </Paragraph>
      <Paragraph>
        Try to solve the puzzle in the least number of moves and as quickly as
        possible! You can toggle between light and dark modes for a personalized
        experience.
      </Paragraph>
    </InfoContainer>
  );
};

export default GameInfo;
