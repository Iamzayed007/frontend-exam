import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./todo";


const Home = () => {
//  const todos = useSelector((state)=>state.todo.todos)
//  console.log('todo', todos)

//  const dispatch = useDispatch()
const [todos, setTodos] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((data) => setTodos(data));
  
},[])

  return (
    <div className="h-screen">
      <form className="text-center mt-16 px-12">
        <input
        //   ref={textRef}
          type="text"
          placeholder="Add a daily task"
          className="input input-bordered input-primary w-full max-w-lg mb-3"
          required
        />
        <input
          className="btn btn-accent ml-1"
          type="submit"
          value="Add To-do"
        />
      </form>

      <div className="lg:px-52 mb-12">
        <h2 className="text-center text-2xl font-bold text-primary mt-16 mb-8">
          To-Do Tasks
        </h2>

        <div className="grid grid-cols-3 font-bold">
         <div>ToDO</div>
         <div>Edit</div>
         <div>Delete</div>
          
         </div>
              <div className="grid-cols-3">
              {todos?.map((todo) => (
                // <Todo key={todo.userId} todo={todo}/>
                
                <div>
                    {todo?.title}

                   
                </div>
              ))}
               
              </div>

          
      
       
      </div>
    </div>
  );
};

export default Home;