import Child from "./Child"

function Q1() {
  const name = "Shourya Awasthi"
  const age = 18

  return (
    <div>
      <h2>Q1 — Parent Component</h2>
      <Child name={name} age={age} />
    </div>
  )
}

export default Q1
