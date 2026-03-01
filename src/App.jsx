import './App.css'
import Calendar from './Calendar'

export default function App() {
  return (
    <>
      <form>
        <textarea rows={10} cols={36} name="text" id="text"></textarea>
        <button>Submit</button>
      </form>
      <Calendar />
    </>
  )
}