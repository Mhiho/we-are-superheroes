import React from "react";

const searchHero = (props) => {
  return (
    <div className="search-position-fixed">
      <form onSubmit={props.submit}>
        <input
          placeholder="type your superhero"
          onChange={props.change}
          type="search"
          value={props.term}
        />
        <input
          className="btn btn-md btn-primary"
          type="submit"
          value="search"
        />
      </form>
    </div>
  );
};

export default searchHero;
