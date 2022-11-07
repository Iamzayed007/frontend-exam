import SinglePost from "./SinglePost";

const { useState, useEffect } = require("react")

function Post() {
    const [post, setPost] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [post])
    localStorage.setItem('postData', JSON.stringify(post));
    return (
        <div>
            <h1>Hello: {post.length}</h1>
            <div className="card lg:4 md:6 sm:12 bg-base-100 shadow-xl gap-4">
            {
                post.map(p => <SinglePost
                    key={p.id}
                    p={p}
                ></SinglePost>)
            }
            </div>
        </div>
    )
}

export default Post;