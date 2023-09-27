import { useEffect, useState } from 'react'
import Gallery from './Gallery'
import SearchBar from './SearchBar'
import { DataContext } from './DataContext'
// import ClearButton from './ClearButton'

function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])

	const API_URL = 'https://itunes.apple.com/search?term='

	useEffect(() => {
		if(search) {
			const fetchData = async () => {
				document.title = `${search} Music`
				const response = await fetch(API_URL + search)
				const resData = await response.json()
				if (resData.results.length > 0) {
					return setData(resData.results)
				} else {
					return setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [search])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

	const handleClear = () => {
		setSearch('');
		setMessage('Search for Music!');
		setData([]);
	  };

	return (
		<div>			
	 	 <SearchBar
          handleSearch={handleSearch}
          handleClear={handleClear}
           term={search} // Pass the search term to the SearchBar
        />
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
		</div>
  	);
}

export default App;