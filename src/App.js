import React, { useEffect, useState, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Gallery from './Gallery';
import SearchBar from './SearchBar';
// import { DataContext } from './DataContext';
// import { SearchContext } from './SearchContext';
// import ClearButton from './ClearButton';
import AlbumView from './AlbumView';
import ArtistView from './ArtistView';
import { Fragment } from 'react';



function App() {
	let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])
	// let searchInput = useRef('')

	const API_URL = 'https://itunes.apple.com/search?term='


// const fetchData = async (term) => {
//     document.title = `${term} Music`;
//     const response = await fetch(API_URL + term);
//     const resData = await response.json();
//     if (resData.results.length > 0) {
//       setData(resData.results);
//     } else {
//       setMessage('Not Found');
//     }
//   };

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
    e.preventDefault();
    setSearch(term);
  };

  const handleClear = () => {
    setSearch('');
    setMessage('Search for Music!');
    setData([]);
  };


return (
    <div>
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<Fragment>
							<SearchBar handleSearch={handleSearch} handleClear={handleClear} term={search} />
							<Gallery data={data} />
						</Fragment>
					} />
					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
		</div>
  	);
}

export default App;
    //   {/* <SearchContext.Provider value={{
    //     term: search,
    //     handleSearch: handleSearch
    //   }}> */}
    //     {/* <SearchBar handleSearch={handleSearch} handleClear={handleClear} term={search} /> */}
    //   {/* </SearchContext.Provider>
    //   {message}
    //   <DataContext.Provider value={data}>
    //     <Gallery data={data} />
	// 	<AlbumView />
	// 	<ArtistView />
    //   </DataContext.Provider> */}
    