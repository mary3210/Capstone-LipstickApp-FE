import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const PostDetail = (props) => {
    const [post, setPost ] = useState(null)
    const {id} = useParams()
    const BASE_URL = 'http://localhost:3000/'

   
}