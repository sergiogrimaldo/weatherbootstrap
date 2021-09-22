import React from 'react';
import cover from '../../assets/cover.jpg';

export default function Banner() {
  return (
    <div>
      <img src={cover} alt='' style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }} />
    </div>
  )
}