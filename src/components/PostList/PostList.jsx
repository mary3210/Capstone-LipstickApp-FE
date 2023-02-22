import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartRating from "../HeartRating";

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
            <div className="HomePosts">
              <Link key={post._id} to={`/post/${post._id}`}>
                <div className="images">
                <img alt={post.tage} src={post.image} />
                </div>
                <div className="ptags">
                <p>{post.name}</p>
                </div>
                <HeartRating fixedRating={post.rating} setRating={() => {}} />
              </Link>
            </div>
          ))}
      </ul>
    </>
  );
};

export default PostList;
