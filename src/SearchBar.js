import { useState } from 'react'

// function SearchBar(props) {
//     let [searchTerm, setSearchTerm] = useState('')

//     return (
//         <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

//             <input type="text" placeholder="Enter a search term here" onChange={
//                 (e) => setSearchTerm(e.target.value)
//             } />

//             <input type="submit" />

//         </form>
//     )
// }

// export default SearchBar

// const SearchBar = ({ handleSearch, handleClear, term }) => {
//     const handleChange = (e) => {
//       handleSearch(e, e.target.value);
//     };
  
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search for music..."
//           value={term}
//           onChange={handleChange}
//         />
//         <button type="submit">Search</button>
//         <button type="button" onClick={handleClear}>
//           Clear
//         </button>
//       </form>
//     );
//   };
  
//   export default SearchBar;

const SearchBar = ({ handleSearch, handleClear }) => {
    const [term, setTerm] = useState('');
  
    const handleChange = (e) => {
      setTerm(e.target.value);
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