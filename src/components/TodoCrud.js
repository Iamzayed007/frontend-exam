import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react"

const TodoCrud = () => {
    const [data, setData] = useState(null);
    const [editMode, setEditMode] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    // save items to localStorage 
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(data))
    }, [data])


    // remove todo
    const handleRemove = (id) => {
        const newData = data.filter(todo => todo.id !== id)
        setData(newData)
    }
    // Edit item 
    const handleEdit = (id) => {
        // setData(newData)
    }


    // add todo 
    const handleSubmit = e => {
        e.preventDefault();
        const title = e.target.todo.value;
        // const id = data.length + 1;
        const id = uuidv4();
        const todo = { title, id }
        setData([...data, todo])
    }

    return (
        <div>
            <h2>Todo Crud</h2>

            {/* Add new item to list  */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input name="todo" type="text" placeholder="name your todo" />
                <button> Add todo</button>
            </form>

            <div className="todos">
                {data && data.map(todo => {
                    const { title, id } = todo;
                    return <div key={id} className="todo">
                        Id: <span>{id}</span>
                        {editMode ?
                            <form onSubmit={handleEdit}>
                                <input type="text" onChange={e => setNewTitle(e.target.value)} defaultValue={title} />
                                <button>Save</button>
                            </form>
                            : <h2>{title}</h2>}
                        <div className='action'>
                            <button onClick={() => handleRemove(id)}>Delete</button>
                            <button onClick={() => setEditMode(id)}>Edit</button>
                        </div>
                    </div>
                })}
            </div>
        </div>)
}
export default TodoCrud;