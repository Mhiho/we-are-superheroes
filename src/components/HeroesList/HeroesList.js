import React from 'react'
import Hero from '../Hero/Hero'

const heroesList = props => {
   
    return (
        <div>
            { (props.results || []).map(hero => {
                return (
                    <Hero key={hero.id} name={hero.name} src={hero.image.url} click={()=> props.passId(hero.id)} />
                )
            })
            }
        </div>
    )
}

export default heroesList;