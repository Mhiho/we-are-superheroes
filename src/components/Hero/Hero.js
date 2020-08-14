import React from 'react'


const hero = props => {

    return (
        <div onClick={props.click}>
            <h1>{props.name}</h1>
            <img alt="heroImage" src={props.src}/>
        </div>
    )
}

export default hero;