//using map function
import React from "react";
import Card from "./Card";
import sdata from "./sdata";

// console.log(value.title);
import "./App.css";
//function ncard(value){
//console.log(value);
/* return (
    <Card
      imgsrc={value.imgsrc}
      category={value.category}
      title={value.title}
      link={value.link}
    />
  );

}*/
function App() {
  return (
    <div>
      <h1 className="heading_style">List of Top 5 Netflix Series</h1>
      {sdata.map(function ncard(value, index) {
        console.log(index);
        return (
          <Card
            key={value.id} //Each child in a list should have a unique "key" prop.
            imgsrc={value.imgsrc}
            category={value.category}
            title={value.title}
            link={value.link}
          />
        );
      })}
      ;
    </div>
  );
}

export default App;
