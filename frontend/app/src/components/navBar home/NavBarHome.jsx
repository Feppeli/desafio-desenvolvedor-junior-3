import { Link } from "react-router-dom";
import './NavBarHome.css'


const NavBarHome = () => {
  return (
    <nav>
      <h1>Blog system</h1>

      <div className="links">
        <Link to="/addPost">add Post</Link>
        <Link to="/cats">Edit post</Link>
        <Link to="/deletePost">delete post</Link>
        <Link to="/goats">logout</Link>
      </div>
    </nav>
  );
};
export default NavBarHome;
