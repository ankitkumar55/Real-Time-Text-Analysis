
import React, { useState } from "react";
import './App.css';
import Statistics from './components/Statistics';
import StringReplacement from './components/StringReplacement';

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [replace, setReplace] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  return (
    <div className="App">
      <h1>Real-Time Text Analysis</h1>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setHighlightedText(e.target.value); // Reset highlighted text to current text
        }}
        placeholder="Type your text here..."
      />
      <div
        className="highlighted-text"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      ></div>
      <Statistics text={text} />
      <StringReplacement 
        text={text}
        setText={setText}
        search={search}
        setSearch={setSearch}
        replace={replace}
        setReplace={setReplace}
        setHighlightedText={setHighlightedText}
      />
    </div>
  );
}

export default App;
