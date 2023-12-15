//Second method of props
import React from "react";
import Card from "./Card";
import sdata from "./sdata";
// console.log(sdata[0].title);

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="heading_style">List of Top 5 Netflix Series</h1>

      <Card
        imgsrc={sdata[0].imgsrc}
        category={sdata[0].category}
        title={sdata[0].title}
        link={sdata[0].link}
      />
      <Card
        imgsrc={sdata[1].imgsrc}
        category={sdata[1].category}
        title={sdata[1].title}
        link={sdata[1].link}
      />
      <Card
        imgsrc={sdata[2].imgsrc}
        category={sdata[2].category}
        title={sdata[2].title}
        link={sdata[2].link}
      />
    </div>
  );
}

export default App;
