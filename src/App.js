import { useState } from "react"
import "./App.css"
import SingleColor from './SingleColor'
import Values from 'values.js'
function App() {
  const [color, setColor] = useState("");
  cont[error, setError] = useState(false)
  const [list,setList] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <>
  <section className="container">
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color}/>
    </form>
  </section>
  <section className="colors">
    <h4>list goes here</h4>
  </section>
  </>
  )
}

export default App
