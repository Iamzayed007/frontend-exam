import React, { useEffect,useState } from 'react';
import logo from './logo.svg';

import './App.css';

function App() {

  const [posts, setPosts]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      
      localStorage.setItem("postArray", JSON.stringify(json));
    })
  },[])

  const getPostArray =()=>{
    debugger
    const postArray = JSON.parse(localStorage.getItem("postArray"));
    setPosts(postArray);
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{posts?.length}</h1>
        <h1>{posts[0]?.userId}</h1>
        <h2>{posts[0]?.title}</h2>

        <button onClick={getPostArray}>Get From localStorage</button>

     
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        
      {
        posts?.forEach((post) => {
          <div>
            <h1>{post?.title}</h1>
            <div className='flex-auto'>
              <h3>{post?.id}</h3>
              <h3>{post?.userId}</h3>
            </div>
            <p>{post?.body}</p>

          </div>
           })}
</div>

      </header>
    </div>
  );
}

export default App;
