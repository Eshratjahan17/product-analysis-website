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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptatibus maxime eos perferendis quod nulla! Distinctio ex minus
          quis cum deserunt error illum voluptatibus! Veniam, quae. Optio
          exercitationem quam, ad earum delectus et ab temporibus beatae
          doloribus quidem dicta corrupti esse aut, labore distinctio quisquam
          voluptatem aspernatur? Sint, quidem ratione.
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