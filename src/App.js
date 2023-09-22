// import React, { useEffect, useState } from 'react'
// import './App.css';
// import Gallery from './Gallery'
// import SearchBar from './SearchBar'
// import ClearButton from './ClearButton';


// function App() {
// 	let [search, setSearch] = useState('')
// 	let [message, setMessage] = useState('Search for Music!')
// 	let [data, setData] = useState([])
//   const searchInputRef = useRef(null);

// 	const API_URL = 'https://itunes.apple.com/search?term='

  
  

// 	useEffect(() => {
// 		if(search) {
// 			const fetchData = async () => {
// 				document.title = `${search} Music`
// 				const response = await fetch(API_URL + search)
// 				const resData = await response.json()
// 				if (resData.results.length > 0) {
// 					return setData(resData.results)
// 				} else {
// 					return setMessage('Not Found')
// 				}
// 			}
// 			fetchData()
// 		}
// 	}, [search])
	
// 	const handleSearch = (e, term) => {
// 		e.preventDefault()
// 		setSearch(term)
// 	};

// // 	return (
// // 		<div>
// // 			<SearchBar handleSearch = {handleSearch}/>
// // 			{message}
// // 			<Gallery data={data} />
// // 		</div>
// //   	);
// // }
// const handleClear = () => {
//   setSearch('');
//   setMessage('Search for Music!');
//   setData([]);
//   if (searchInputRef.current) {
//     searchInputRef.current.value = '';  // Clear the input using the ref
// }

//   return (
//   //   <div>
//   //     <input
//   //       type="text"
//   //       value={inputValue}
//   //       onChange={(e) => setInputValue(e.target.value)}
//   //     />
//   //     <ClearButton onClick={handleClear} />
//   //   </div>
//   // );
//   <div>
//       <SearchBar handleSearch={handleSearch} />
//       <ClearButton onClick={handleClear} />
//       {message}
//       <Gallery data={data} />
//     </div>
//   );
// };
// export default App;

import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import ClearButton from './ClearButton';

const App = () => {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('Search for Music!');
  const [data, setData] = useState([]);
  const searchInputRef = useRef(null);

  const API_URL = 'https://itunes.apple.com/search?term=';

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`;
        const response = await fetch(API_URL + search);
        const resData = await response.json();
        if (resData.results.length > 0) {
          setData(resData.results);
        } else {
          setMessage('Not Found');
        }
      };
      fetchData();
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };

  const handleClear = () => {
    setSearch('');
    setMessage('Search for Music!');
    setData([]);
    if (searchInputRef.current) {
      searchInputRef.current.value = '';  // Clear the input using the ref
    }
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} inputRef={searchInputRef} />
      <button onClick={handleClear}>Clear</button>
      {message}
      <Gallery data={data} />
    </div>
  );
};

export default App;
