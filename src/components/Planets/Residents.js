import axios from "axios";
import React, { useEffect, useState } from "react";
import "./film.css";
import { useSelector } from "react-redux";
import { Table, Spinner } from "reactstrap";
import Resident from "./Resident";

const Residents = () => {
  const residentApi = useSelector((state) => state.resident.data);
  const [residentData, setResidentData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (residentApi && residentApi.length > 0) {
      Promise.all(
        residentApi.map((res) =>
          axios
            .get(res)
            .then((response) => response.data)
            .catch((error) => {
              console.log(error);
              return null;
            })
        )
      ).then((data) => {
        setResidentData(data.filter((item) => item !== null));
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [residentApi]);

  console.log(residentData);

  return (
    <>
      {loading ? (
        <div>
          <Spinner style={{ width: "10rem", height: "10rem" }}></Spinner>
        </div>
      ) : residentApi.length == 0 ? (
        <div>No Data</div>
      ) : (
        <div>
          <Table striped bordered>
            <tr>
              <th style={{ width: "12rem" }}>Name</th>
              <th style={{ width: "12rem" }}>Height</th>
              <th style={{ width: "12rem" }}>Mass</th>
              <th style={{ width: "12rem" }}>Hair Color</th>
              <th style={{ width: "12rem" }}>Skin Color</th>
              <th style={{ width: "12rem" }}>eye Color</th>
              <th style={{ width: "12rem" }}>Birth Year</th>

              <th>Gender</th>
            </tr>
          </Table>
          <tbody>
            {residentData.map((d, i) => {
              return (
                <tr key={i}>
                  <Resident data={d} />
                </tr>
              );
            })}
          </tbody>
        </div>
      )}
    </>
  );
};

export default Residents;
