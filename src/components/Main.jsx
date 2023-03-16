import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../utils/requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await axios(requests.requestPopular);
    setMovies(response.data.results);
  };

  return <div>Main</div>;
};

export default Main;
