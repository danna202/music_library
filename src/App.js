import  React, { useEffect, useState , useRef} from 'react'
import Gallery from './Gallery'
import SearchBar from './SearchBar'
import { DataContext } from './DataContext'
import { SearchContext } from './SearchContext'
import ClearButton from './ClearButton'

function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('')
	let [data, setData] = useState([])
	let searchInput = useRef('')

	const API_URL = 'https://itunes.apple.com/search?term='


const fetchData = async (term) => {
    document.title = `${term} Music`;
    const response = await fetch(API_URL + term);
    const resData = await response.json();
    if (resData.results.length > 0) {
      setData(resData.results);
    } else {
      setMessage('Not Found');
    }
  };



  const handleSearch = (e, term) => {
    e.preventDefault();
    fetchData(term);
  };

  const handleClear = () => {
    setSearch('');
    setMessage('Search for Music!');
    setData([]);
  };


return (
    <div>
      <SearchContext.Provider value={{
        term: search,
        handleSearch: handleSearch
      }}>
        <SearchBar handleSearch={handleSearch} handleClear={handleClear} term={search} />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;