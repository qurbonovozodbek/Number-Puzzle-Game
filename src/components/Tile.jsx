import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TileContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.tileBg};
  color: ${({ theme }) => theme.tileColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 480px) {
    height: 60px;
    width: 60px;
    font-size: 1.2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: 70px;
    width: 70px;
    font-size: 1.4rem;
  }

  @media (min-width: 769px) {
    height: 80px;
    width: 80px;
    font-size: 1.8rem;
  }
`;


const Tile = ({ value, onClick }) => {
  return (
    <TileContainer
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {value !== 0 ? value : ''}
    </TileContainer>
  );
};

export default Tile;
