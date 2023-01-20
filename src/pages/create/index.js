import axios from "axios";
import { useState } from "react";



const Create = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const createPost = (payload) => {
        return axios.post("/post", payload)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            description
        };

        try {
            const createdPost = await createPost(payload);
        } catch(error) {
            console.log(error)
        }

        
    }

    return <div className="w-screen min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[700px] flex flex-col gap-4">
            <div className="flex flex-col">
            <label>Title:
            </label>
            <input type="text" className="border p-2" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="flex flex-col">
            <label>Description:</label>
            <textarea type="text" className="border p-2" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <input type="submit" className="border p-2 cursor-pointer"/>
        </form>
    </div>
}

export default Create;