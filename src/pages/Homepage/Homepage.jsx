import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Homepage() {
    //create state for chatacters
    const [characters, setCharacters] = useState([])

    useEffect(
        ()=> {
            console.log('homepage loaded')
            axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                console.log(res.data.results)
                setCharacters(res.data.results)
            })
        }, [] //empty array means loads once
    )

  return (
    <div className="home-container">
        <h1>Main Characters</h1>
        <div className="characters-container">
            {
                characters.map(item=> <CharacterCard 
                    key={item.id}
                    character={item} />)
            }
        </div>
    </div>
  )
}

export default Homepage