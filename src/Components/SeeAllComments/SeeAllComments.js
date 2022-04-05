import React from 'react';
import './SeeAllComments.css';

const SeeAllComments = (props) => {
 const { name, picture, about, ratings } = props.cmnt;
  return (
    <div className="card">
      <div className="user">
        <img src={picture} alt="" />
        <h3>{name}</h3>
      </div>
      <div className="comment">
        <p>{about.slice(0, 200)}</p>
        <img src={ratings}></img>
      </div>
    </div>
  );
};

export default SeeAllComments;