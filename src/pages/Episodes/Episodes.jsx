import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./Episodes.css";
import { useContext } from "react";

function Episodes() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [options, setOptions] = useState([]); //generates select list
  const [selectedOption, setSelectedOption] = useState(1); //dropdown value
  const [selectedEpisode, setSelectedEpisode] = useState(); //complete episode information
  const [characterList, setCharacterList] = useState([]); //store 'selectedEpisode's characters. sub-object. Promise.all() returns an array

  const fetchEpisodeData = async () => {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/episode/${selectedOption}`
      );
      // console.log(res.data)
      setSelectedEpisode(res.data);

      const episodeCharacters = await Promise.all(
        //iterate through the character list given as endpoints
        res.data.characters.map((url) => {
          return axios.get(url).then((res) => res.data);
        })
      );

      setCharacterList(episodeCharacters);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode`)
      .then((res) => {
        console.log(res.data.info.count);
        const newOptions = [];

        for (let i = 1; i <= res.data.info.count; i++) {
          newOptions.push(i);
        }
        setOptions(newOptions);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  useEffect(() => {
    fetchEpisodeData();
  }, [selectedOption]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="episodes-container">
      <div>
        <label htmlFor="select-episode">Select an episode: </label>
        <select id="select-episode" onChange={handleSelectChange}>
          {options.map((num) => (
            <option key={num} value={num}>{`Episode ${num}`}</option>
          ))}
        </select>
      </div>
      <div>
        <div className="episode-info">
          <p>Episode Name: {selectedEpisode?.name}</p>
          <p>Air date: {selectedEpisode?.air_date}</p>
        </div>
        <div className="character-container">
          {characterList.map((item) => (
            <CharacterCard character={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Episodes;
