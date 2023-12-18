import {useState} from 'react'
import "./App.css";

const CountNumber = () => {
   const [count, setCount] = useState(0);
   const Increment = () => {
     setCount(count + 1); 
   };
   const Decrement = () => { 
     setCount(count - 1);
   };
  return (
    <>
      <div className="container">
        <h1 className="heading">{count}</h1>

        <div className="button">
          <button onClick={Increment}>+</button>
          <button onClick={Decrement}>-</button>
        </div>
      </div>
    </>
  );
}

export default CountNumber
