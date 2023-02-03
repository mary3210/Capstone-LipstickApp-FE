import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="Header">
        <Link to="/about">
          <h1>
            <FontAwesomeIcon icon={faWandMagicSparkles}></FontAwesomeIcon>{" "}
            Perfect Lips
          </h1>
        </Link>
      </div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/post/">
        <p>Create Post</p>
      </Link>
      <Link to="/collection/">
        <p>My Collection</p>
      </Link>
    </nav>
  );
};

export default Navbar;
