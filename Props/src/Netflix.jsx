import React from 'react'
import sdata from './sdata'
import Card from './Card';
const Netflix = () => {
  return (
    <div>
      <Card
        key={sdata[0].id} 
        imgsrc={sdata[0].imgsrc}
        category={sdata[0].category}
        title={sdata[0].title}
        link={sdata[0].link}
      />
    </div>
  );
}

export default Netflix
