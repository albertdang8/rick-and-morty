import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import { useContext } from 'react'
import { ThemeContext } from "../../contexts/ThemeContext";

function Homepage() {

    const {darkMode, setDarkMode} = useContext(ThemeContext);
    //create state for chatacters
    const [characters, setCharacters] = useState([])

    useEffect(
        ()=> {
            axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                // console.log(res.data.results)
                setCharacters(res.data.results)
            })
            .catch(error => {
                console.log("Error: " ,error);
            })
        }, [] //empty array means loads once
    )

  return (
    <div className={darkMode?"home-container home-dark"  :"home-container"}>
        <Search setCharacters={setCharacters}/>
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