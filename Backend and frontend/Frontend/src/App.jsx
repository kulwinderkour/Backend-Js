import React, { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'    // axios are used to fetch the data from the backend

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() =>{
    axios.get('/api/jokes')     // no need to use the complete link
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  })

  // USE EFFECT HAS ONE CALLBACK AND ONE DEPENDENICE ARRAY

  return (
    <>
    <h1>hii this is kulwinder kour</h1>
    <h2> Jokes:{jokes.length}</h2>

    {/* // create a loop to print the jokes with different id  */}
    {
      jokes.map((joke) =>{
        return(
          <div key={joke.id}>
          
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>  // key is the unique if of the jokes
        );
})
    }
      </>
  )
}

export default App
