import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

function Search({setCharcters}) {
  //I need to get the input from the textbox
  //where will I put it? create a state!
  const [query, setQuery] = useState("");

    //https://rickandmortyapi.com/api/character/?name=beth

  const handleSubmit = (e) => {
    //stop the page from refreshing
    e.preventDefault();
    console.log(`search for: `, query)
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res=>{
        console.log(res.data.results)
        setCharcters(res.data.results)
    })
    .catch(err => console.log(err))
  }

  return (
    <form className="search-container">
      <input
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={handleSubmit}
        type="text"
        placeholder="Search all characters"
      />
    </form>
  );
}

export default Search;
