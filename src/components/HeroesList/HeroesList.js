import React from "react";
import Hero from "../Hero/Hero";

const heroesList = (props) => {
  return (
    <>
      {(props.results || []).map((hero) => {
        return (
          <div className="row w-100">
            <ul
              style={{ cursor: "pointer" }}
              className="list-group w-100 ml-5 mr-5"
            >
              <Hero
                key={hero.id}
                name={hero.name}
                src={hero.image.url}
                click={() => props.passId(hero.id)}
              />
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default heroesList;
