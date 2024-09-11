import React, { useState } from 'react';

function XDictionary() {
  // Initialize the dictionary state with the given array of words and meanings
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);
  
  // State to store the search term and result
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  // Handle the search functionality
  const handleSearch = () => {
    const foundWord = dictionary.find(item => 
      item.word.toLowerCase() === searchTerm.toLowerCase()
    );
    
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dictionary App</h1>
      {/* Input field for searching a word */}
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a word..."
        style={{ padding: '10px', width: '300px' }}
      />
      {/* Search button */}
      <button 
        onClick={handleSearch}
        style={{ padding: '10px', marginLeft: '10px' }}
      >
        Search
      </button>
      <h1>Definition:</h1>
      {/* Display result */}
      <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        {result}
      </div>
    </div>
  );
}

export default XDictionary;
