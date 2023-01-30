import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <div className="Header">
            <Link to="/about"><h1>Perfect Lips</h1></Link>
        </div>
    )
}

export default Header;