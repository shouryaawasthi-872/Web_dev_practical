import './App.css'
import Q1 from './component_API/q1'
import Q2 from './component_API/q2'

function App() {
  return (
    <div className="App">
      <h1>React Questions</h1>

      <section className="question">
        <Q1 />
      </section>

      <section className="question">
        <Q2 />
      </section>
    </div>
  )
}

export default App
