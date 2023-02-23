import { useEffect, useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import PostList from "../PostList/PostList";
import HeartRating from "../HeartRating";

const EditPost = (props) => {
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8000";
  const { id } = useParams();
  const { data } = props;
  const [editForm, setEditForm] = useState({
    image: "",
    name: "",
    review: "",
    tags: "",
    rating: 0,
  });

  const getPost = async (id) => {
    try {
      const response = await fetch(BASE_URL + `/posts/${id}`);
      const result = await response.json();
      setEditForm(result);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    console.log("abs ", data);
    getPost(id);
  }, [id]);

  const handleChange = (event) => {
    const userInput = { ...editForm };
    userInput[event.target.name] = event.target.value;
    setEditForm(userInput);
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const updatedPost = { ...editForm };

    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      };
      await fetch(BASE_URL + `/posts/${id}`, requestOptions);
      navigate(`/post/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const deletePost = async (post) => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(BASE_URL + `/posts/${id}`, options);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const setHeartRating = (newRating) => {
    setEditForm((oldEditFormValues) => {
      const copyOfEditForm = { ...oldEditFormValues };
      copyOfEditForm.rating = newRating;
      return copyOfEditForm;
    });
  };

  return (
    <>
      <br />
      <section className="editpost">
        <h2>Edit Post</h2>
        <form onSubmit={updatePost}>
          <div>
            <label>
              New Image:
              <input
                type="url"
                id="image"
                name="image"
                value={editForm.image}
                onChange={handleChange}
              />
            </label>
            <br />
            <div>
              <label>
                Edit Name:
                <input
                  type="text"
                  value={editForm.name}
                  name="name"
                  placeholder="edit name"
                  onChange={handleChange}
                />
              </label>
            </div>
            <br />
            <div className="reviewtxt">
              <label>
                Edit Review:
                <textarea
                  type="text"
                  value={editForm.review}
                  name="review"
                  placeholder="edit review"
                  onChange={handleChange}
                >
                </textarea>
              </label>
            </div>
            <br />
            <div>
              <label>
                Edit Rating:
                <HeartRating setRating={setHeartRating} />
              </label>
            </div>
            <input className="savePost" type="submit" value="Save Post" />
            <button className="delete-button" onClick={deletePost}>
              Delete
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditPost;
