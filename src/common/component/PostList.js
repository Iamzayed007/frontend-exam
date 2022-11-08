import React, { useState, useEffect } from 'react'
import SinglePost from './singlePost'

const PostList = () => {
    const [posts, setposts] = useState([])
    const [isEditing, setisEditing] = useState(false)
    const [title, settitle] = useState('')
    const [body, setbody] = useState('')
    const [id, setid] = useState(0)

    const editPost = (post) => {
        console.log(post);
        setisEditing(true)
        setbody(post.body)
        settitle(post.title)
        setid(post.id)
    }

    const updatePost = (post) => {
        const data = localStorage.getItem('posts')
        const jsonData = JSON.parse(data)
        const newData = jsonData.filter(ele => ele.id !== id)
        newData.push({id, title, body})
        localStorage.setItem('posts', JSON.stringify(newData))
        getData()
        setisEditing(false)
    }

    const deletePost = (id) => {
        const data = localStorage.getItem('posts')
        const jsonData = JSON.parse(data)

        const newData = jsonData.filter(ele => ele.id !== id)
        localStorage.setItem('posts', JSON.stringify(newData))
        getData()
    }

    const getData = () => {
        const data = localStorage.getItem('posts')
        setposts(JSON.parse(data))
    }

    useEffect(() => {
        getData()
        
    }, [])
  return (
    <div className='list'>
        {
            posts.map((post) => (
                <SinglePost key={`${post.id}`} post={post} editPost={editPost} deletePost={deletePost} />
            ))
        }
        {
            isEditing &&
            <div className='popup' style={{position: 'absolute', top: '40%', background: "#fff", padding: "10px"}}>
                <input type="text" value={title} onChange={e => settitle(e.target.value)} />
                <input type="text" value={body} onChange={e => setbody(e.target.value)} />
                <button onClick={updatePost}>submit</button>
            </div>
        }
    </div>
  )
}

export default PostList