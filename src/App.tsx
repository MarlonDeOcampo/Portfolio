import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='text-xl font-bold text-red-500'>App Works</div>
    </div>
  )
}

export default App
