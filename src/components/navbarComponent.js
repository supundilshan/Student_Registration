import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand"> my CRUD App</Link>
        <div className="navbar-collapse" id="navbarSupportContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/create" className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                    <Link to="/edit" className="nav-link">Edit</Link>
                </li>
            </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;