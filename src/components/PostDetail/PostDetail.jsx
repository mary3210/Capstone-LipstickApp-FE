import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import HeartRating from "../HeartRating";
const PostDetail = (props) => {
  const [collection, setCollection] = useState([]);
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const BASE_URL = "https://lipstickcapstone-ad5aff4af392.herokuapp.com/";

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

  const remove = async (collectionId) => { 
    try {
      let postId = id

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
        await fetch(BASE_URL + `collection/delete/${collectionId}/${postId}`, requestOptions)
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
     
      <img src={post?.image} alt={post?.tags} />
      <h4>{post?.name}</h4>
      <h4>{post?.review}</h4>
      <div>
      <HeartRating fixedRating={post?.rating} setRating={()=>{}}/>
      </div>
      <Link to="edit">Edit Post</Link>
      <p>
        {collection?.map((collection) => {
          return (
            <p>
              {" "}
              <div className="collectName">
              {collection?.name}</div>
              <button className="btn btnOne" onClick={() => add(collection._id)}>Add</button>
              <button className="btn btnTwo" onClick={() => remove(collection._id)}>Remove</button>
            </p>
          );
        })}
      </p>
    </div>
  );
};

export default PostDetail;
