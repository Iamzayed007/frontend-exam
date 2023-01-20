import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Link,
} from "react-router-dom";

const fetchPosts = () => {
    return axios.get("/posts")
}

const Home = () => {
    const [posts, setPosts] = useState([]);
    // const {data, isLoading, error} = useQuery("posts", fetchPosts);
    return (
    <div className="min-h-screen flex flex-col justify-center items-center text-blue-700 gap-8">
      <h1 className="text-lg font-semibold">Welcome to Dev posts</h1>
      <h4 className="text-md">Recent Posts</h4>
      {/* {data.data.map(post => <div key={post.id}>{post.title}</div>)} */}
      <Link to="create" className="w-28 h-32 border border-1 flex flex-col justify-center items-center"><span className="text-xl">+</span>Add a Post</Link>
    </div>)
}

export default Home;