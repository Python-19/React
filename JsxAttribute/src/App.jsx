import React from 'react'
import './App.css'


function App() {
  const name="Mosarrat";
  
  const img1 = "https://picsum.photos/200/300";
  const img2 = "https://picsum.photos/230/300";
  const img3 = "https://picsum.photos/300/300";
  const links="https://picsum.photos/";
  return (
    <>
      <h1 className="heading">My name is {name}</h1>
      <div className="img_div">
        <img src={img1} alt="randomImage" />
        <img src={img2} alt="randomImage" />
        <a href={links} target="_lorem">
          <img src={img3} alt="randomImage2" />
        </a>
      </div>
    </>
  );
}

export default App
