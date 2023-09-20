import React, { useState } from 'react';

function SearchBar({ filterComments }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    filterComments(searchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by Username"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
