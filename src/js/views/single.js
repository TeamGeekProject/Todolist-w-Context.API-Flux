import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/todo.css";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      {/* <h1 className="display-4">
        3rd PAGE ---- This will show the demo element: {store.demo[params.theid].title}
      </h1>

      <hr className="my-4" /> */}
      <h1>Team 4 Geeks</h1>
      <Link to="/home">
        <span className="btn btn-secondary btn-lg" href="#" role="button">
          Back to home page
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
