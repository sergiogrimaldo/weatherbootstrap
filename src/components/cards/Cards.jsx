import React from 'react';
import Card from '../card/Card';
import './Cards.css';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          />
        )}
      </div>
    );
  } else {
    return(
      <div>No cities</div>
    )
  }
}