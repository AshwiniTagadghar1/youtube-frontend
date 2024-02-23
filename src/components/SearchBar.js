import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting traditionally
    onSearch(query); // Invoke the callback with the current query
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='search-bar'
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
