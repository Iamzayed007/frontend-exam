import React, { useEffect, useState } from 'react';

const Data = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, [])
    return (
        <div>
             <h2 className='text-red-400 text-2xl m-4 text-center font-bold'>Total Post: {posts.length}</h2>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
{
    posts.map( (posts, title, id, body) => <div>
        <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
    <h2 className="card-title">{posts.id}</h2>
      <h2 className="card-title">{posts.title}</h2>
      <p>{posts.body}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-active btn-accent">Update</button>
      <button className="btn btn-error">Delete</button>
      </div>
    </div>
  </div>
    </div>)
}
</div>

        </div>
    );
};

export default Data;
