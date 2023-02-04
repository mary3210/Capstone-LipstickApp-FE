import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PostDetail = (props) => {
  const [collection, setCollection] = useState([]);
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const BASE_URL = "http://localhost:8000/";

  const getPost = async () => {
    try {
      const response = await fetch(BASE_URL + `posts/${id}`);
      const result = await response.json();

      setPost(result);
    } catch (err) {
      console.error(err);
    }
  };

  const getCollections = async () => {
    try {
      const response = await fetch(BASE_URL + "collection");
      const allCollections = await response.json();
      setCollection(allCollections);
      console.log(allCollections);
    } catch (err) {
      console.error(err);
    }
  };

  const add = async (collectionId) => { 
    try {
      let postId = id

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        }
        await fetch(BASE_URL + `collection/add/${collectionId}/${postId}`, requestOptions)
    } catch (err) {
        console.error(err);
    }
  }

  useEffect(() => {
    getPost();
    getCollections();
  }, []);

  return (
    <div className="postcontainer">
      <h1>Post detail page</h1>
      <img src={post?.image} alt={post?.tags} />
      <h4>{post?.name}</h4>
      <h4>{post?.review}</h4>
      {post?.rating}
      <Link to="edit">Edit Post</Link>
      <p>
        {collection?.map((collection) => {
          return (
            <p>
              {" "}
              {collection?.name} <button className="btnOne" onClick={() => add(collection._id)}>Add</button>
            </p>
          );
        })}
      </p>
    </div>
  );
};

export default PostDetail;
