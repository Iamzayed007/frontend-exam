import React, {useState,useEffect} from 'react';
import './App.css';
import {v4 as uuid} from 'uuid'
import { Button } from 'bootstrap';

function App() {
  const [state, setState] = useState([]);
  const [title, setTitle] = useState("");
  const [details , setDetails] = useState("");


 useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setState(json));  
 }, [])
  
  // UDF's
const users = state.filter(item => item.id <11);
console.log(users);

const onAdd = () =>{

}

const onEdit = (id) =>{
  
}


const onDelete = (id) =>{
  const data = users.filter(item => item.id !== id);
    setState(data)
}


  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={()=>{}}>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={(value)=> setTitle(value)} />
        </label>
        <label>
          Details:
          <input type="text" name="title" value={details} onChange={(value)=> setDetails(value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        {
          users.map(item=>(
            <div key={uuid()}>
              <div>
                {item.title}
              </div>
              <div>
                {item.body}
              </div>
            <buttom type="button" onClick = {()=> onEdit(item.id)}>Edit</buttom>
            <buttom  type="button" onClick = {()=> onDelete(item.id)}>Delete</buttom>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
