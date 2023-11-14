import React, { useState } from "react";
import "./Planets.css";
import "./film.css";

import "bootstrap/dist/css/bootstrap.css";

import { useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";

const Resident = ({ data }) => {
  return (
    <div>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>{data.height}</td>
            <td>{data.mass}</td>

            <td>{data.hair_color}</td>
            <td>{data.skin_color}</td>

            <td>{data.eye_color}</td>
            <td>{data.birth_year}</td>
            <td>{data.gender}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Resident;
