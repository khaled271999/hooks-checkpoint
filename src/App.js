import { useState } from 'react';
import './App.css';
import AddMovie from './component/AddMovie';
import { moviesData } from './component/MovieData';
import FilterMovie from './component/FilterMovie';
import MovieList from './component/MovieList';

function App() {
  const [movies , setMovies] =useState(moviesData)
  const [inputSearch , setInputSearch] = useState("")


  const add = (newMovie) => {
    setMovies([...movies,newMovie])
  }

  
  return (
    <div className="App">
      <FilterMovie inputSearch = {inputSearch} setInputSearch ={setInputSearch}/>
    <MovieList movies={movies} inputSearch ={inputSearch} />
    <AddMovie add={add}/>
    </div>
  );
}

export default App;
