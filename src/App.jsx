
import './App.css'
import { Link } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Link to={"/add"}>Add Student</Link>
    <br />
    <Link to={"/list"}>List Of Student</Link>
    </>
  )
}

export default App
