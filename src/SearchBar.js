import { useState } from 'react'

const SearchBar = ({ handleSearch, handleClear }) => {
    const [term, setTerm] = useState('');
  
    // const handleChange = (e) => {
    //   setTerm(e.target.value);
    // };
    const handleChange = (e) => {
      const searchTerm = e.target.value;
      setTerm(searchTerm);
      handleSearch(e, searchTerm); // Trigger search as typing
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch(e, term);
    };
  
    const handleClearClick = () => {
      setTerm('');  // Clear the input when "Clear" is clicked
      handleClear();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for music..."
          value={term}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
      </form>
    );
  };
  
  export default SearchBar;