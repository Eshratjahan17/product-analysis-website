import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body-container row ">
      <div className=" col-8">
        <div className="text-container">
          <h1>
            Your Next Laptop <br></br>
            <h1>Should be the Best One</h1>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            soluta quasi, distinctio aut qui fugiat temporibus magni obcaecati
            nesciunt suscipit.
          </p>
        </div>
      </div>
      <div className="img-container col-4">
        <img
          src="https://icdn.digitaltrends.com/image/digitaltrends/macbook-pro-2021-16.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Body;