import { useState } from 'react'
import {Link} from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to FrontEnd class in KLU</h1>
      <h2>Today's topic is introduction to React</h2>
      <h3>Today's date is 29.07.2025</h3> 
      <h4>K.Snehitha</h4>
      <h5>2400030727</h5>
      <Link to="/Page1">Go To Page1</Link>
      <br/><br/><br/>
      <Link to="/Page2">Go To Page2</Link>
      <br/><br/><br/>
      <Link to="/Page3">Go To Page3</Link>
    </>
  )
}

export default App
