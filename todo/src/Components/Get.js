import axios from "axios";
import { useState, useEffect } from "react";

function Get() {
    const [posts, setPosts] =useState([]);

    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts" 
      });

      useEffect(() => {
        client.get('?_limit=10').then((response) => {
           setPosts(response.data);
        });
     }, []);

    return (
        <div>
        <h2>All Posts</h2>
        {posts.map((post) => {
            return (
                <div>
                {post}
                </div>
            )
        })}
        </div>
    )
    
}

export default Get;