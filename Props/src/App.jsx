import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";
import "./App.css";
const Favs="amazon"
const FavSeries=()=>{
 if(Favs==="netflix"){
  return <Netflix />
 }else{
  return <Amazon />
 }
}
function App() {
  return (
    <div>
      <h1 className="heading_style">List of Top 5 Netflix Series</h1>
      
        
        <FavSeries />
         
      </div>
    
  );
}

export default App;
