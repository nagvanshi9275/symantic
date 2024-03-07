import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';


import Main1 from "./Main1";

import Main2 from "./Main2";

import Main4 from "./Main4";

import Main5 from "./Main5";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

       <div className="kritrim">
      
      <h1>अंतः अस्ति प्रारंभ  </h1>

     <Main1/>

     </div>

    </>
  )
}

export default App

















