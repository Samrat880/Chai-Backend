import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })

    .catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <>

    <h1>Day 3 of learning Backend</h1>
    <p> JOkes : {jokes.length}</p>

    {
      jokes.map((joke,index) => (
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
