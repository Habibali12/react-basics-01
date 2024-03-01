import './App.css';
import "./dist/css/jobs_component.css"
import { useState } from "react";

function App() {

  const planets = [
    { name: "Mars", isGasPlanet: true },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: false },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
  ]

  let [count, setCount] = useState(0);

  const increaseInput = () => {
    setCount(count = count + 1);
  }

  const decreaseInput = () => {
    setCount(count = count - 1);
  }

  const resetInput = () => {
    setCount(0);
  }

  const [inputValue, setInputValue] = useState("");

  let handleInput = (event) => {
    setInputValue(event.target.value);
  }

  return (

    <div className="App">
      <Job job_title="React Developer" job_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." job_deadline="10/2/2024" />
      <Job job_title="Angular Developer" job_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." job_deadline="10/2/2024" />
      <Job job_title="UI/UX Designer" job_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." job_deadline="10/2/2024" />

      {planets.map((planet, key) => (
        planet.isGasPlanet === true ? <h1 className={key}>{planet.name}</h1> : <h1>No Gas Planet</h1>
      ))}

      <input type="text" onChange={handleInput} /> <br />
      {inputValue}

      <div>
        <button onClick={increaseInput}>Increase</button>
        <button onClick={decreaseInput}>Decrease</button>
        <button onClick={resetInput}>Zero</button>
        <p>{count}</p>
      </div>
    </div>
  );
}

const Job = (props) => {
  return (
    <div className="jobs-div">
      <h1>{props.job_title}</h1>
      <p>{props.job_description}</p>
      <p>{props.job_deadline}</p>
      <button>Apply Here</button>
    </div>
  )
}


export default App;
