// src/components/StringReplacement.js
import React from "react";
import './StringReplacement.css';


const StringReplacement = ({ text, setText, search, setSearch, replace, setReplace, setHighlightedText }) => {
  const highlightAndReplace = (originalText, searchWord, replaceWord) => {
    const regex = new RegExp(searchWord, "g");
    const modifiedText = originalText.replace(regex, replaceWord);
    
    const highlightedText = modifiedText.replace(
      new RegExp(replaceWord, "g"),
      `<span class="highlight">${replaceWord}</span>`
    );

    return highlightedText;
  };

  const handleReplaceAll = () => {
    if (search.trim() === "") return;
    const highlighted = highlightAndReplace(text, search, replace);
    setHighlightedText(highlighted);
  };

  return (
    <div className="string-replacement">
      <input
        class = "form-control round"
        type="text"
        placeholder="Search string"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <i className="fas fa-arrow-right" style={{ fontSize: '24px', margin: '0 10px' }}></i>

      <input
        class = "form-control round"
        type="text"
        placeholder="Replace with"
        value={replace}
        onChange={(e) => setReplace(e.target.value)}
      />
      <button onClick={handleReplaceAll}>Replace All</button>
    </div>
  );
};

export default StringReplacement;
