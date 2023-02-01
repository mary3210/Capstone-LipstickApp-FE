import { useState } from "react";
import { useEffect } from "react";

const CollectionList = (props) => {
    const [collection, setCollection] = useState([]);
    const BASE_URL = "http://localhost:8000";

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

      return(
        <>
       <h1>This is the collection page</h1>
        <ul>
            
        {collection &&
          collection.map((collection) => (
            <div>
        <h4>{collection?.name}</h4>
        <p>{collection?._id}</p>
        </div>
      ))}
</ul>
</>
)}



export default CollectionList