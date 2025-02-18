import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Rectangle Creator</h2>
<p>Count: <input id="count" type="number" value="5"></p>
<button id="create">Create</button>
<button id="cancel">Cancel</button>
    </>
  )
}

export default App
