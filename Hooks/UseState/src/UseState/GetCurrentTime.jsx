import {useState} from 'react'
import './GetCurrentTime.css'
const GetCurrentTime = () => {
  let time = new Date().toLocaleTimeString();
  const [currtime, setcurrtime] = useState(time);
   
  const CurrTime = ()=>{
    let times=new Date().toLocaleTimeString();
    setcurrtime(times);
  }
  return (
    <div>
      <h1>{currtime}</h1>
      <button onClick={CurrTime}>Get Current Time</button>
    </div>
  )
}

export default GetCurrentTime
