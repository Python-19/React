import {useState} from 'react'

const GetCurrentTime = () => {
  const [currtime, setcurrtime] = useState();
   
  const CurrTime = ()=>{
    const time=new Date().toLocaleTimeString();
    setcurrtime(time);
  }
  return (
    <div>
      <h1>{currtime}</h1>
      <button onClick={CurrTime}>Get Current Time</button>
    </div>
  )
}

export default GetCurrentTime
