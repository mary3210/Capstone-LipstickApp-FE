import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CollectionList = (props) => {
  const [collection, setCollection] = useState([]);
  const BASE_URL = "https://murmuring-lowlands-71026.herokuapp.com";

  const getCollections = async () => {
    try {
      const response = await fetch(BASE_URL + "/collection");
      const allCollections = await response.json();
      setCollection(allCollections);
      console.log(allCollections);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <>
      <ul>
        {collection &&
          collection.map((collection) => (
            <div className="collection">
              <Link to={`${collection._id}`}>
                <h4>{collection?.name}</h4>
              </Link>
            </div>
          ))}
      </ul>
    </>
  );
};

export default CollectionList;
