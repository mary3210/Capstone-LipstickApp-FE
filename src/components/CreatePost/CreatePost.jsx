import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = (props) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [postForm, setPostform] = useState({
    image: "",
    name: "",
    rating: "",
    review: "",
    tags: "",
  });

  const BASE_URL = "http://localhost:8000/";

  const handleChange = (e) => {
    const userInput = { ...postForm };
    userInput[e.target.name] = e.target.value;
    setPostform(userInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentState = { ...postForm };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(currentState),
      };
      const response = await fetch(BASE_URL + 'posts', requestOptions);
      const newPost = await response.json();
      setPostform([...posts, newPost]);
      setPostform({
        image: "",
        description: "",
        tags: "",
        rating: "",
        difficulty: "",
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <section>
        <h2>Create New Post</h2>
        <div className="create-post">
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <input
                  hidden={true}
                  type="url"
                  id="image"
                  name="image"
                  value={postForm.image}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Description
                <input
                  type="text"
                  id="review"
                  name="review"
                  placeholder="Enter review"
                  value={postForm.review}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <div>
              <label>
                Tags
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  placeholder="separated by commas"
                  value={postForm.tags}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label>
                Rating:
              <input
                  type="text"
                  id="rating"
                  name="rating"
                  placeholder="rating"
                  value={postForm.rating}
                  onChange={handleChange}
                />
              </label>
              <input type="submit" value="Post" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatePost;
