import './App.css'
import AmazingPeopleDashboard from './components/AmazingPeopleDashboard'
import people from "./data/amazingPeople";

function App() {
  return (
    <>
      <AmazingPeopleDashboard people={people}/>
    </>
  )
}

export default App
