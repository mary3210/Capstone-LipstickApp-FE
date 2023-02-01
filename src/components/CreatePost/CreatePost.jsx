import {useState} from "react"
import { useNavigate } from "react-router-dom"

const CreatePost = (props) => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const [postForm, setPostform] = useState({
        image: "",
        name: "",
        rating: "",
        review: "",
        tags: "",
    })

    const BASE_URL = "http://localhost:8000/"
}