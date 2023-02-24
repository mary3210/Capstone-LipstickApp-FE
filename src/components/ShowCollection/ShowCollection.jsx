import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ShowCollection = (props) => {
  const [ShowCollection, setShowCollection] = useState(null);
  const { id } = useParams();
  const BASE_URL = "https://murmuring-lowlands-71026.herokuapp.com";

  const getCollection = async () => {
    try {
      const response = await fetch(BASE_URL + `collection/${id}`);
      const result = await response.json();

      setShowCollection(result);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div className="showpage">
      <h1>Collection List</h1>
      {ShowCollection &&
        ShowCollection.posts.map((post) => (
          <div>
            <img src={post?.image} alt={post?.tags} />
            <p>{post?.name}</p>
            <h4>{post?.review}</h4>
            {post?.rating}
          </div>
        ))}
    </div>
  );
};

export default ShowCollection;
