import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios, { AxiosError } from 'axios'
import { useEffect } from 'react'


function App() {
  
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        console.log("Data received:", res.data);
        setJokes(res.data)  
      })
      .catch((err) => {
        console.error("API ERROR:", err.message);
      });
  },[]);

  return (
    <>
      <h1>Hello NSG</h1>
      <p>JOKES: {jokes.length}</p>
      <p>{typeof (setJokes)}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
