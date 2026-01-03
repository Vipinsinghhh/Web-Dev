import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)       //yha let ki jgh const bhi variable loge toh bhi value change kar skte he kyuki ye ek array he 

  //let counter = 15

  const addValue=()=>{
    if(counter === 50){
      return;
    }
    
    // setcounter((prevCounter)=>{
    //   counter = prevCounter+1;
    //   if(counter > 50){
    //     counter = 50;
    //   }
    //   return counter;
    // })
    // setcounter((prevCounter)=>{
    //   counter = prevCounter+1;
    //   if(counter > 50){
    //     counter = 50;
    //   }
    //   return counter;
    // })
    // setcounter((prevCounter)=>{
    //   counter = prevCounter+1;
    //   if(counter > 50){
    //     counter = 50;
    //   }
    //   return counter;
    // })
    // setcounter((prevCounter)=>{
    //   counter = prevCounter+1;
    //   if(counter > 50){
    //     counter = 50;
    //   }
    //   return counter;
    // }) 
    // setcounter((prevCounter)=>{
    //   counter = prevCounter+1;
    //   if(counter > 50){
    //     counter = 50;
    //   }
    //   return counter;
    // }) 
     //this is very huge code and in scaling the product might be create errors instead of this use ->      
     

     //same work with this code 
     setcounter(prevCounter => Math.min(prevCounter + 1, 50));
     setcounter(prevCounter => Math.min(prevCounter + 1, 50));
     setcounter(prevCounter => Math.min(prevCounter + 1, 50));
     setcounter(prevCounter => Math.min(prevCounter + 1, 50));
     setcounter(prevCounter => Math.min(prevCounter + 1, 50));

     //if you dont want to stop the updation of counter value after 50
    //  setcounter(prevCounter => prevCounter+1)
    //  setcounter(prevCounter => prevCounter+1)
    //  setcounter(prevCounter => prevCounter+1)
    //  setcounter(prevCounter => prevCounter+1)
    //  setcounter(prevCounter => prevCounter+1) 
  }

  const removeValue=()=>{
    if(counter === 0){
      return;
    }
    setcounter(counter-1)
  }
  
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
