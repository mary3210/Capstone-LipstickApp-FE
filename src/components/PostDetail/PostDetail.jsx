import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const PostDetail = (props) => {
    const [post, setPost ] = useState(null)
    const {id} = useParams()
    const BASE_URL = 'http://localhost:8000/'

    const getPost = async () => {
        try {
            const response = await fetch(BASE_URL + `posts/${id}`)
            const result = await response.json()
            
            setPost(result)

        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getPost()
    }, [])

    return (
        <div className="post-container">
        <h1>Post detail page</h1>
        <img src={post?.image} alt={post?.tags} />
        <h4>{post?.name}</h4>
        <h4>{post?.review}</h4>
        {post?.rating}
        <Link to="edit">Edit Post</Link>
        </div>
    )
}

export default PostDetail