import { useState } from "react"
import {useParams, useNavigate} from "react-router-dom"
import PostList from "../PostList/PostList"

const editPost = (props) => {
    const { data } = props 
    const [editForm, setEditForm] = useState({
        image: data.image,
        name: data.name,
        review: data.review,
        tags: data.tags.toString(),
        rating: data.rating,
        
    })
    
    const navaigate = useNavigate()
    const { id } = useParams()

    const URL= 'http://localhost:8000/posts/{id}'
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

    // const deletePost = (post) => {

    // }
    // return(
    //     <>
    //     <br />
    //     <section  className="edit-post">
    //         <h2>Edit Post</h2>
    //         <form onSubmit={updatePost}>
    //             <div>
    //             <label>
    //                 <input
    //                     hidden={true}
    //                     type="url"
    //                     id="image"
    //                     name="image"
    //                     value={editForm.image}
    //                     onChange={handleChange}
    //                     />
    //             </label>
    //             <br/>
    //             <div> 
    //                 <label>
    //                     Edit Review:
    //                     <input
    //                     type="text"
    //                     value={editForm.review}
    //                     name="review"
    //                     placeholder="edit description"
    //                     onChange={handleChange}
    //                     />
    //                 </label>
    //             </div>
    //             <br />
    //             <div>
    //                 <label>
    //                     Rating
    //                 </label>
    //             </div>
    //             <input type="submit" value="Edit Post" />
    //             </div>
    //         </form>
    //     </section>
        
    //     </>
    // )
   


}}}