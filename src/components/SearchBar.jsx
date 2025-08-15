import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ابحث عن أفلام..."
      />
      <button type="submit">بحث</button>
    </form>
  );
};

export default SearchBar;