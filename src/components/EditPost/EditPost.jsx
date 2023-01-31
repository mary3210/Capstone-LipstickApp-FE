import { useEffect, useState } from "react"
import {useParams, useNavigate, Navigate} from "react-router-dom"
import PostList from "../PostList/PostList"

const EditPost = (props) => {
    const { data } = props 
    const [editForm, setEditForm] = useState({
        image: "",
        name: "",
        review: "",
        tags: "",
        rating: 0,
        
    })
    useEffect(() => { 
        if(data) {setEditForm({image: data.image}, {name: data.image},
            {review: data.review}, {tags: data.tags}, {rating: data.rating}

        )}
    }
    const navigate = useNavigate()
    const { id } = useParams()

    const URL = 'http://localhost:8000/{id}'
    //double check if the url is correct

    const handleChange = (event) => {
        const userInput = {...editForm}
        userInput[event.target.name] = event.target.value    
        setEditForm(userInput)
    }

    const updatePost = async (e) => {
        const createTags = (str) => {
            let arr = str.split(',')
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] === ' ') {
                    arr[i] = arr[i].substring(1, arr[i].length)
                }
            }
            return arr
        }
        e.preventDefault()
        editForm.tags = createTags(editForm.tags)
        const updatedPost = { ...editForm }
        try {
            const requestOptions = {
                method: "PUT",
                body: JSON.stringify(updatedPost),
            }
            await fetch(URL, requestOptions)
            Navigate('/')
        }
        catch (err) {
            console.error(err)
        }
    }


     const deletePost = async (post) => {
        try {
            const options = {
                method: "DELETE",
            }
            const response = await fetch(URL, options)
           Navigate('/')
        } catch (err) {
            console.error(err)
        }
    }

    // const setImage = (newImage) => {
    //     setEditForm((oldPostForm) => {
    //         const formCopy = { ...oldPostForm }
    //         formCopy.image = newImage
    //         return formCopy
    //     })
    // }

    
    return(
        <>
        <br />
        <section  className="edit-post">
            <h2>Edit Post</h2>
            <form onSubmit={updatePost}>
                <div>
                <label>
                    <input
                        hidden={true}
                        type="url"
                        id="image"
                        name="image"
                        value={editForm.image}
                        onChange={handleChange}
                        />
                </label>
                <br/>
                <div> 
                    <label>
                        Edit Review:
                        <input
                        type="text"
                        value={editForm.review}
                        name="review"
                        placeholder="edit review"
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        Rating
                    </label>
                </div>
                <input type="submit" value="Edit Post" />
                </div>
            </form>
        </section>
        <section className="delete-post">
            <h2>Delete Post</h2>
            <button classname= "delete-button" onClick={deletePost}>Delete</button>
         </section>
        </>
    )
   


}

export default EditPost