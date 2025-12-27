import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){              //hum yha bhi function bna skte he
  return(
    <div>
      <h1>custom App | chai</h1>
    </div>
  )
}

// const ReactElement = {                 
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (                                                   //jsx se element create krna
    <a href="https://google.com" target='_blank'>Visit google </a>
)

const anotherUser = " chai aur react"

const reactElement = React.createElement(               //React method se element create krna      
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser   //yha curly braces nhi lgte variable par
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {reactElement}
  </StrictMode>
)
