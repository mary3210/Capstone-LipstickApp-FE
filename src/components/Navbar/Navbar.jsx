import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to='/'>
                <FontAwesomeIcon icon="fa-lips"/>
                <p>Home</p>
            </Link>
            <Link to="/post/">
                <p>Create Post</p>
            </Link>
            <Link to="/collection/">
                <p>My Collection</p>
            </Link>
        </nav>
    )
}

export default Navbar