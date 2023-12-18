import {useState} from 'react'

const DigitalClock = () => {
  let time=new Date().toLocaleTimeString();
  const [currtime,setCurrtime]=useState(time);
  const UpdateTime=()=>{
    let time=new Date().toLocaleTimeString();
    setCurrtime(time);
  };
  setInterval(UpdateTime,1000);
  return (
    <div>
      <h1>{currtime}</h1>
    </div>
  )
}

export default DigitalClock
