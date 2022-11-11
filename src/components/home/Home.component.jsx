import React from 'react'
// import { useState, useEffect } from 'react'
import './Home.css'
import Search from '../search/Search.component'
import Cocktails from '../cocktails/Cocktails.component'

function Home({onChangeHandler, drinks,  onLetterChangeHandler , cocktailLetter, searchField}) {
  
  return (
    <div className='home-container'>
      <div className='search'>
        <Search onChangeHandler={onChangeHandler} onLetterChangeHandler={onLetterChangeHandler} cocktailLetter={cocktailLetter} searchField={searchField} />
      </div>
      <div>
        <Cocktails drinks={drinks} />
      </div>
    </div>
  )
}

export default Home

{/* <p>
  {drinks.map(user => (
    <li key={user.idDrink}>{user.strDrink}</li>
  ))}
</p> */}

// const [drinks, setDrinks] = useState([])
  // const [searchField, setSearchField] = useState('');
  // const [filteredCocktails, setFilteredCocktails] = useState(drinks);

  // const fetchData = async () => {
  //   const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
  //   const data = await response.json()
  //   setDrinks(data.drinks)
  // }

  // useEffect( () => {
  //  fetchData()
  // }, [])

  // useEffect( () => {
  //   const newFilteredCocktails = drinks.filter((drink) => {
  //     return drink.strDrink.toLocaleLowerCase().includes(searchField)
  //   });

  //   setFilteredCocktails(newFilteredCocktails);
  // }, [drinks,searchField]);
  
  // const onSearchChange = (event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   console.log(searchFieldString);
  //   setSearchField(searchFieldString)
  // };