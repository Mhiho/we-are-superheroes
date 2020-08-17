import React, { useState } from "react";
import SearchHero from "./components/SearchHero/SearchHero";
import { searchFunction } from "./services/searchFunction";
import HeroesList from "./components/HeroesList/HeroesList";
import HeroDetails from "./components/HeroDetails/HeroDetails";
import "./index.css";
import ErrorBoundary from "./services/ErrorBoundary";

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [bioView, setBioView] = useState(false);
  const [hero, setHero] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchFunction(term).then((data) => {
      setResults(data.results);
    });
  };
  const handleClick = (id) => {
    const heroes = [...results];
    const filtered = heroes.find((hero) => hero.id === id);
    setHero(filtered);
    console.log(filtered);
    setBioView(true);
  };
  const handleClose = () => {
    setBioView(false);
  };

  return (
    <>
      <ErrorBoundary>
        <div className="mt-3 mb-3 d-flex justify-content-center">
          <SearchHero
            term={term}
            change={(e) => setTerm(e.target.value)}
            submit={handleSubmit}
          />
        </div>
        <div className="row justify-content-md-center">
          <HeroesList
            className=""
            results={results}
            passId={(id) => handleClick(id)}
          />
        </div>
        {bioView === true ? (
          <HeroDetails
            name={hero.name}
            bioels={hero.biography}
            biokeys={hero.biography}
            statels={hero.powerstats}
            statkeys={hero.powerstats}
            src={hero.image.url}
            close={() => handleClose()}
          />
        ) : null}
      </ErrorBoundary>
    </>
  );
}

export default App;
