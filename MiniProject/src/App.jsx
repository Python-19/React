import React from 'react'

import './App.css'

function App() {
  const greet=()=>{
    //const time= new Date().toLocaleTimeString();
     const hour = new Date(2023,5,5,20).getHours();
     let morning=hour>=4 && hour<=11;
     let afternoon=hour>=11 && hour <=16;
     let evening=hour>17 && hour<=20;
     let night = hour >= 21 || hour <= 3;
     let greeting="";
     let cssStyle={};
     
     if(morning){
     greeting= "Goodmorning";
     cssStyle.color = "green";
     }else if(afternoon){
     greeting= "Good afternoon";
     cssStyle.color = "yellow";
     }else if(evening){
     greeting= "Good Evening";
     cssStyle.color = "blue";
     }else {
       greeting= "Good Night";
       cssStyle.color = "pink";
     }
     return {greeting,cssStyle};
  }
  const {greeting,cssStyle} = greet();
  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App
