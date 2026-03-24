import './App.css'
import Calendar from './Calendar'
import { useState } from 'react'

export default function App() {
  const [text, setText] = useState("")
  function handleSubmit(e){
    e.preventDefault()
    console.log(text)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea rows={10} cols={36} name="text" id="text" onChange={e => setText(e.target.value)}></textarea>
        <button>Submit</button>
      </form>
      <Calendar />
    </>
  )
}