import React from 'react'
import sdata from "./sdata";
import Card from "./Card";
const Amazon = () => {
  return (
    <div>
      <Card
        key={sdata[1].id}
        imgsrc={sdata[1].imgsrc}
        category={sdata[1].category}
        title={sdata[1].title}
        link={sdata[1].link}
      />
    </div>
  );
}

export default Amazon
