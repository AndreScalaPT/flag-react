import './App.css'
import MovieCardList from './components/MovieCardList'
import movieData from './data/movieData'

function App() {

  return (
    <>
      <MovieCardList movieData={movieData}/>
    </>
  )
}

export default App
