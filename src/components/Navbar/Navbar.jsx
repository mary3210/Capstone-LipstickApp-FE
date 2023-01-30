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
            <link to="/collection/">
                <p>My Collection</p>
            </link>
        </nav>
    )
}

export default Navbar