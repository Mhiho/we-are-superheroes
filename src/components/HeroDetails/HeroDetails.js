import React from 'react'
import '../../index.css'

const heroDetails = props => {
    return (
        <div  className="fixed-position">
            <span style={{color: 'white'}} onClick={props.close}>x</span>
            <h1>{props.name}</h1>
            <img src={props.src} alt="imageBigHero"/>
            <h3>bio: </h3>
            <h3>
                powers:
            </h3>
        </div>
    )
}
export default heroDetails;