import axios from "axios";
import React, { useEffect, useState } from "react";
import "./film.css";
import { useSelector } from "react-redux";
import { Table, Spinner } from "reactstrap";
import Film from "./Film";

const Films = () => {
  const filmApi = useSelector((state) => state.film.data);
  const [filmData, setFilmData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const requests = filmApi.map((filmUrl) => axios.get(filmUrl));
        const responses = await Promise.all(requests);

        // Clear existing data when fetching new data
        setFilmData([]);

        // Update state with new film data
        setFilmData((prevData) => [
          ...prevData,
          ...responses.map((response) => response.data),
        ]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [filmApi]);

  return (
    <div>
      {loading ? (
        <div>
          <Spinner style={{ width: "10rem", height: "10rem" }}></Spinner>
        </div>
      ) : filmApi.length == 0 ? (
        <div>No Data</div>
      ) : (
        <>
          <Table striped bordered>
            <tr>
              <th style={{ width: "12rem" }}>Title</th>
              <th style={{ width: "12rem" }}>Episode Id</th>
              <th style={{ width: "12rem" }}>Opening Crawl</th>
              <th style={{ width: "12rem" }}>Producer</th>
              <th style={{ width: "12rem" }}>Director</th>
              <th>Release Date</th>
            </tr>
          </Table>
          <tbody>
            {filmData.map((d, i) => {
              return (
                <tr key={i}>
                  <Film data={d} />
                </tr>
              );
            })}
          </tbody>
        </>
      )}
    </div>
  );
};

export default Films;
