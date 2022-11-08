import React from 'react'

const SinglePost = ({post, editPost, deletePost}) => {
  return (
    <div className='single-post'>
        <h2>{post.title}</h2>
        <p>{post.body.split(' ', 10).join(' ')}</p>
        <button onClick={() => editPost(post)}>Edit</button>
        <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  )
}

export default SinglePost