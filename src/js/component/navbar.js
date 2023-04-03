import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    // <nav className="navbar navbar-light bg-light mb-3">
    //   <Link to="/">
    //     <span className="navbar-brand mb-0 h1">React Boilerplate</span>
    //   </Link>
    //   <div className="ml-auto me-3">
    //     <Link to="/todo">
    //       <button className="btn btn-primary">Check our Todo List</button>
    //     </Link>
    //   </div>
    // </nav>

    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <Link className="navbar-brand" to="/">
          <i class="fa-solid fa-house"></i>{" "}
          <span className="navbar-brand mb-0 h1">Project Home</span>
        </Link>
        <div className=" me-3">
          <Link to="/todo">
            <button className="btn btn-primary">Check our Todo List</button>{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};
