import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const BASE_URL = "http://localhost:8000";

  const getPosts = async () => {
    try {
      const response = await fetch(BASE_URL + "/posts");
      const allPosts = await response.json();
      setPosts(allPosts);
      console.log(allPosts);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h2>Posts in Lists</h2>
      <ul>
        {posts &&
          posts.map((post) => (
            <div>
              <Link key={post._id} to={`/post/${post._id}`}>
                <img alt={post.tage} src={post.image} />
                <p>{post.name}</p>
                <p>{post.rating}</p>
                
               
              </Link>
            </div>
          ))}
      </ul>
    </>
  );
};

export default PostList;
