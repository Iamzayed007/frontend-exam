import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
 // Load data from json
  const [allData , setAllData] = useState([]);
  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
      .then(res => res.json())
      .then(data =>  window.localStorage.setItem(JSON.stringify(data)))
  },[])

  useEffect(()=>{
    const result = JSON.parse(window.localStorage.getItem('posts'))
    setAllData(result);
  },[])

  
  //Upddate data
  const handleDelete = (id)=>{
    const newData =   allData.filter(data => data.userId != id);
     window.localStorage.setItem(JSON.stringify(newData));
     
    setAllData(newData);
  }

  return (
    <div className="App">
      <h1>Load data</h1>
      <h2 className='text-red-600'>Total available posts are : {allData.length}</h2>
      <div className='w-1\2 mx-auto border-2 bg-red-200 grid grid-cols-4 gap-10 '>
        {
          allData.map(data => <div className='w-62 mx-10 bg-white'>
            <h1 className='text-2xl font-bold'>ID : {data.id}</h1>
            <h1 className='text-xl font-medium'>Title : {data.title}</h1>
            <p>Description : {data.body}</p>
            
            <button onClick={()=>{handleDelete(data.userId)}} className='bg-red-500 border-2 px-2 py-2 rounded'>Delete</button>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
