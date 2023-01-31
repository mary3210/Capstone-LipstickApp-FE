import { useState, useEffect } from "react";

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
      <ul>{posts && posts.map((post) => <div> <img alt={post.tage} src={post.image}/> {post.name} {post.rating} </div>)}</ul>
    </>
  );
};

export default PostList;
