import { Link } from 'react-router-dom'
// import { FaHeart, FaLips } from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles} from "@fortawesome/free-solid-svg-icons";
const Header = () => {

    return (
        <div className="Header">
            <Link to="/about">
            
           
                <h1><FontAwesomeIcon icon={faWandMagicSparkles}></FontAwesomeIcon> Perfect Lips</h1></Link>
        </div>
    )
}

export default Header;