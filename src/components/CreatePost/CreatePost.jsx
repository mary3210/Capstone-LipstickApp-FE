import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartRating from "../HeartRating";

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

  const BASE_URL = "https://murmuring-lowlands-71026.herokuapp.com";

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
      const response = await fetch(BASE_URL + "posts", requestOptions);
      const newPost = await response.json();
      setPostform([...posts, newPost]);
      setPostform({
        image: "",
        name: "",
        rating: "",
        review: "",
        tags: "",
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const setHeartRating = (newRating) => {
    setPostform((oldEditFormValues) => {
      const copyOfEditForm = { ...oldEditFormValues };
      copyOfEditForm.rating = newRating;
      return copyOfEditForm;
    });
  };

  return (
    <div>
      <section>
        <h2>Create New Post</h2>
        <div className="createpost">
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <h2>Create Lipstick Review</h2>
              <div className="imageinput">
              <label>
                Image:
                <input
                  type="url"
                  placeholder="url"
                  id="image"
                  name="image"
                  value={postForm.image}
                  onChange={handleChange}
                />
              </label>
              </div>
            </div>
            <br />
            <div>
              <label>
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter a name"
                  value={postForm.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <div className="reviewtxt">
              <label>
                Review:
                <textarea
                  type="text"
                  id="review"
                  name="review"
                  placeholder="Enter review"
                  value={postForm.review}
                  onChange={handleChange}
                >
                  </textarea>
              </label>
            </div>
            <br />
            <div>
              <label>
                Rating:
                <HeartRating setRating={setHeartRating} />
                <input
                  hidden={true}
                  type="number"
                  id="rating"
                  name="rating"
                  placeholder="rating"
                  value={postForm.rating}
                  onChange={handleChange}
                />
              </label>
              <div className="btn postbtn1">
              <input className="postBtn" type="submit" value="Post" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatePost;
