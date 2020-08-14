import React from 'react';


const searchHero = props => {
    return (
      <div className="" >
        <form onSubmit={props.submit}>
          <input
            placeholder="wpisz nazwę superbohatera"
            className=""
            onChange={props.change}
            type="search"
            value={props.term}
            />
            <input
            className=""
            type="submit"
            value="szukaj"
            />
          </form>
      </div>
    )
}

export default searchHero;