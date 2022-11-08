import React, { useEffect, useState } from 'react';
import './App.css';
import PostList from './common/component/PostList';

function App() {
  const [posts, setposts] = useState([])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.json()
    })
    .then(data => {
      localStorage.setItem('posts', JSON.stringify(data))
    })
    .catch(()=> {
      console.log("somthing went wrong to fetch data");
    })
  }

  const initComponents = () => {
    const stringData = localStorage.getItem('posts')
    const jsonData = JSON.parse(stringData)
    setposts(jsonData)
  }

  useEffect(() => {
    // const isDataHere = localStorage.getItem('posts')
    // console.log(isDataHere);
    // if (isDataHere === undefined || isDataHere === null) {
    //   console.log("working");
    // }
    fetchData()
    initComponents()
  }, [])

 
  
  return (
    <div className='App'>
      <PostList posts={posts} />
    </div>
  );
}

export default App
