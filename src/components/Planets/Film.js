import React, { useState } from "react";
import "./Planets.css";
import "./film.css";

import "bootstrap/dist/css/bootstrap.css";
import Modall from "./Modal";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addPlanet } from "../../store/planet";
import { addFilm } from "../../store/film";
import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

const Film = ({ data }) => {
  const keys = Object.keys(data);

  const history = useHistory();

  return (
    <div>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>{data.title}</td>
            <td>{data.episode_id}</td>
            <td>{data.opening_crawl}</td>

            <td>{data.producer}</td>
            <td>{data.director}</td>

            <td>{data.release_date}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Film;
