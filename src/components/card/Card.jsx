import { motion } from 'framer-motion';
import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}>
      <div className="card">
        <div id="closeIcon" className="row">
          <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="cardImage">
              <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="110" height="110" alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};