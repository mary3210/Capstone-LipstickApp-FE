import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to='/'>
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