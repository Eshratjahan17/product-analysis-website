import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import Reviwes from '../Reviwes/Reviwes';
import './Body.css';

const Body = () => {
  const [comments,setComments]=useData();
  const bodyComments=comments.slice(0,6);


  return (
    <div className="body-container row ">
      <div className=" text-container col-7">
        <h1>
          Your Next Laptop <br />
          <span>Should be the Best One</span>
        </h1>
        <p>
          A laptop, laptop computer, or notebook computer is a small, portable
          personal computer (PC) with a screen and alphanumeric keyboard.
          Laptops typically have a clam shell form factor with the screen
          mounted on the inside of the upper lid and the keyboard on the inside
          of the lower lid, although 2-in-1 PCs with a detachable keyboard are
          often marketed as laptops or as having a laptop mode. Laptops are
          folded shut for transportation, and thus are suitable for mobile use.
        </p>
      </div>
      <div className="img-container col-3">
        <img
          src="https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-16.jpg"
          alt=""
        />
      </div>
      <div className="reviwes-container">
        <h1>Customer Reviwes</h1>
        <div className="comments">
          {bodyComments.map((comment) => (
            <Reviwes key={comment.id} comment={comment}></Reviwes>
          ))}
        </div>

        <Link to="/allreviwes">
          <button className="see-all-btn " size="lg">
            All Reviwes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;