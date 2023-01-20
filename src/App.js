import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [index, setIndex] = useState()
  const [updatePost, setUpdatePost] = useState({})
  const [display, setDisplay] = useState(false)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setPosts(data))
  },[setPosts])


  const handleAddPost = (e) => {
    e.preventDefault();
    const form = e.target
    const title = form.title.value
    const postBody = form.postBody.value

    const postData = {
      id: Date.now(),
      title: title,
      body: postBody
    }

    setPosts([postData, ...posts])

  }


  const handleDelete =(id)=> {
    const data = posts.filter(post => post.id !== id)
    setPosts(data) 
  }

const handleUpdate =(index)=> {
  setIndex(index)
  setUpdatePost(posts[index]);
  setDisplay(true)
}

const handleUpdatePost =(e)=> {
  e.preventDefault()
  const form = e.target
    const title = form.title.value
    const postBody = form.postBody.value
    posts[index] = {...updatePost, title: title, body:postBody}

  setDisplay(false)
}



  return (
    <div>
        <form onSubmit={handleAddPost}>
          <input name='title' type='text'/>
          <textarea name='postBody'/>
          <button type='submit'>Add Post</button>
        </form>

        <div>
           {posts.map((post,index) => <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={()=>handleUpdate(index)}>Edit</button>
            <button onClick={()=>handleDelete(post.id)}>Delete</button>
        </div>)}
    </div>



      <div style={{position: 'fixed', inset: 0, height:'100vh', display: display ? 'flex': 'none', alignItems:'center', justifyContent:'center', background:'#999'}}>
        <form onSubmit={handleUpdatePost}>
          <input name='title' type='text' defaultValue={updatePost.title}/>
          <textarea name='postBody' defaultValue={updatePost.body}/>
          <button type='submit'>Update</button>
          <button onClick={()=>setDisplay(false)}>Close</button>
        </form>
      </div>
</div>
  );
}

export default App;


// old code
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */