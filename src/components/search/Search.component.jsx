import React from 'react'
import './Search.css'

function Search({onChangeHandler, onLetterChangeHandler, cocktailLetter, searchField}) {
  const valueLetter = cocktailLetter.toUpperCase()
  const valueSearch = searchField.toUpperCase()
  return (
    <div className='section-container'>
      <div className='search-container'>
        <h4>Search Your Favourite Cocktail From List</h4>
        <input type='search' value={valueSearch} onChange={ onChangeHandler}/>
      </div>
      <div className='search-container letter'>
        <h4>Show Cocktails Starting With Letter: </h4>
        <input type='text' value={valueLetter} onChange={ onLetterChangeHandler}/>
      </div>
    </div>
  )
}

export default Search