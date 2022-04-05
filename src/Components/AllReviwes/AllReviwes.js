import React from 'react';
import useData from '../../Hooks/useData';
import SeeAllComments from '../SeeAllComments/SeeAllComments';
import './AllReviwes.css';

const AllReviwes = () => {
  const [comments, setComments] = useData();
  
  
  return (
    <div>
      <h1>All Comments Here!!!</h1>
      <div className="all-comment-container">
        {comments.map((cmnt) => (
          <SeeAllComments key={cmnt.id} cmnt={cmnt}></SeeAllComments>
        ))}
      </div>
    </div>
  );
};

export default AllReviwes;