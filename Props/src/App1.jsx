//simple props
import React from "react";
import Card from "./Card";

// console.log(sdata[0].title);
import "./App.css";

function App1() {
  return (
    <div>
      <h1 className="heading_style">List of Top 5 Netflix Series</h1>
      <div className="cards">
        <Card
          imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
          category="A Netflix original Series"
          title="DARK"
          link=""
        />
        <Card
          imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
          category="A Netflix original Series"
          title="DARK"
          link=""
        />
        <Card
          imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
          category="A Netflix original Series"
          title="DARK"
          link=""
        />
      </div>
    </div>
  );
}

export default App1;
