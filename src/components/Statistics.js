// src/components/Statistics.js
import React from 'react';
import './Statistics.css';


const Statistics = ({ text }) => {
  const countUniqueWords = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    return words ? new Set(words).size : 0;
  };

  const countCharacters = (text) => {
    const filteredText = text.replace(/[^a-zA-Z0-9]/g, "");
    return filteredText.length;
  };

  return (
    <div className="statistics">
      <p>Unique Words : <span>{countUniqueWords(text)}</span></p>
      <p>Characters (Excluding Spaces and Punctuation) : <span>{countCharacters(text)}</span></p>
    </div>
  );
};

export default Statistics;
