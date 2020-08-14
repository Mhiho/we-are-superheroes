import React, { useState } from 'react';
import SearchHero from './components/SearchHero/SearchHero';
import { searchFunction } from './services/searchFunction';
import HeroesList from './components/HeroesList/HeroesList'
import HeroDetails from './components/HeroDetails/HeroDetails'
import './index.css'

function App() {
  const [term, setTerm] = useState('')
  const [results,setResults] = useState([])
  const [bioView, setBioView] = useState(false)
  const [hero, setHero] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    searchFunction(term).then(data => { setResults(data.results)})
  }
  const handleClick = id => {
    const filtered = results.find(id => id === id)
    setHero(filtered)
    console.log(filtered)
    setBioView(true)
  }
  const handleClose = () => {
    setBioView(false)
  }
  console.log(bioView)
  console.log(hero)

  return (
    <div className="App">
     <SearchHero term={term} change={e=>setTerm(e.target.value)} submit={handleSubmit} />
     <HeroesList results={results} passId={(id)=> handleClick(id)} />
     { bioView === true ? 
       <HeroDetails hero={hero.name} src={hero.image.url} close={()=>handleClose()} />
      : null
     }
    </div>
  );
}

export default App;
