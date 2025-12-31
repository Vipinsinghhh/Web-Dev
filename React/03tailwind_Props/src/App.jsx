import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
        name: "vipin",
        age: 23
    }

    let Arr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>Tailwind.CSS</h1>
    <Card username="Vipin Singh" buttonText="Read this"/>
    <Card username="Vijay Singh" buttonText="padho isse"/>
    </>
  )
}

export default App
