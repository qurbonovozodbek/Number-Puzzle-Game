import React, { useState } from 'react';
import styled from 'styled-components';
import Tile from './Tile';


const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 20px;
  max-width: 400px;
  
  @media (min-width: 768px) {
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
  }
`;


const PuzzleBoard = () => {
  const [tiles, setTiles] = useState(shuffleTiles());

  function shuffleTiles() {
    let arr = [...Array(16).keys()];
    do {
      arr = arr.sort(() => Math.random() - 0.5);
    } while (!isSolvable(arr));
    return arr;
  }

  function isSolvable(arr) {
    let inversions = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j] && arr[i] !== 0 && arr[j] !== 0) inversions++;
      }
    }
    return inversions % 2 === 0;
  }

  function handleTileClick(index) {
    const emptyIndex = tiles.indexOf(0);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 4, emptyIndex + 4];

    if (validMoves.includes(index)) {
      const newTiles = [...tiles];
      newTiles[emptyIndex] = newTiles[index];
      newTiles[index] = 0;
      setTiles(newTiles);

      if (isSolved(newTiles)) {
        setTimeout(() => {
          alert('Congratulations! You solved the puzzle!');
          setTiles(shuffleTiles());
        }, 300);
      }
    }
  }

  function isSolved(arr) {
    return JSON.stringify(arr) === JSON.stringify([...Array(16).keys()]);
  }

  return (
    <BoardContainer>
      {tiles.map((tile, index) => (
        <Tile key={index} value={tile} onClick={() => handleTileClick(index)} />
      ))}
    </BoardContainer>
  );
};

export default PuzzleBoard;
