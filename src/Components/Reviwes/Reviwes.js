
import React from 'react';
import './Reviwes.css';


const Reviwes = (props) => {
  const { name, about, picture, ratings } = props.comment;
 
 
  return (
    <div className="card">
      <div className="user">
        <img src={picture} alt="" />
        <h3>{name}</h3>
      </div>
      <div className="comment">
        <p>{about.slice(0,200)}</p>
        
      </div>
    </div>
  );
};

export default Reviwes;