import React, { useEffect, useState }from 'react'
import axios from 'axios'

function Episodes() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode`)
      .then(res => {
        console.log(res.data.info.count);
        const newOptions = [];

        for(let i = 1; i <= res.data.info.count; i++) {
          newOptions.push(i);
        }
        setOptions(newOptions);
      })
      .catch(err => console.log("Error: ", err));
  }, []);


  return (
    <div className='episodes-container'>
      <div>
        <label htmlFor="select-episode">Select an episode: </label>
        <select id='select-episode'>
          {
            options.map(num => <option key={num}>{`Episode ${num}`}</option>)
          }
        </select>
      </div>
    </div>
  )
}

export default Episodes