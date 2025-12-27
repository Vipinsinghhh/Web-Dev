import Hello from "./New"

function App() {
  const username = "chai aur code"
  return (
    <>
    <Hello/>
    <h1>Hello World with vite react, {username}</h1>           //just like that we insert variables in react inside the curly braces{}
    <p>test para</p>
    </>
  )
}

export default App
