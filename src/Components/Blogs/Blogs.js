import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='q-a-container'>
      <h1>Q/A:</h1>
      <h3> What is Context API?</h3>
      <p>Context API gives the Power to pass data without using props.If we want to pass a data from grand parent to child ,we'll have to use props in every node.And have to share the data with all nodes.To get rid of this problem we use Context API. </p>
      <h3> What is Simmantic Tag ?</h3>
      <p>Simmantic means meaningful.In Html simmantic tag means using meaningful tags.In html we can use div,nav, container etc tags.They all are simmantic tags .Beacause they represents the whole meaning of the sections.</p>
    </div>
  );
};

export default Blogs;