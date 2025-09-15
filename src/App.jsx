import './App.css'
import Counter from "./Counter";

function App() {
  
  function handleClick() { 
    alert(`I'm press the button`)
  }

  const handleAdd12 = (num) => { 
    const add = num + 12;
    alert(add)
    // return add;
  }
  return (
    <> 
      <h1>Vite + React</h1>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleAdd12(7)}>Add</button>
    </>
  )
}

export default App
