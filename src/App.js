import './App.css';
import Navigation from './components/navigation/Navigation.component';
import Home from './components/home/Home.component';
import About from './components/about/About';
import Details from './components/details/Details.components';
import { ScaleLoader } from 'react-spinners'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'

function App() {
  const [drinks, setDrinks] = useState([])
  const [cocktailLetter, setCocktailLetter] = useState('a');
  const [loading, setLoading] = useState(true)
  const [searchField, setSearchField] = useState('');
  const [filteredCocktails, setFilteredCocktails] = useState(drinks);


  const fetchData = async () => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${cocktailLetter}`)
    const data = await response.json()
    setDrinks(data.drinks)
    setLoading(false)
  }

  useEffect( () => {
   fetchData()
   console.log(cocktailLetter)
  }, [cocktailLetter])

  useEffect( () => {
    const newFilteredCocktails = drinks.filter((drink) => {
      return drink.strDrink.toLocaleLowerCase().includes(searchField)
    });

    setFilteredCocktails(newFilteredCocktails);
  }, [drinks,searchField]);



  const onLetterChange = (event) => {
    const letterFieldString = event.target.value.toLocaleLowerCase();
    console.log(letterFieldString)
    setCocktailLetter(letterFieldString)
  };


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    console.log(searchFieldString);
    setSearchField(searchFieldString)
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={ loading ? <ScaleLoader className='loader' color="#075d4c" height={94} width={31} margin={10}/>  : <Home onChangeHandler={onSearchChange} cocktailLetter={cocktailLetter} onLetterChangeHandler={onLetterChange}  drinks={filteredCocktails} searchField={searchField} />} />
        <Route path='about' element={<About />} />
        <Route path='details/:drinkId' element={<Details drinks={filteredCocktails} />} />
      </Routes>
    </Router>
  )

}

export default App;
