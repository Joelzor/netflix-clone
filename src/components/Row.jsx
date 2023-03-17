import { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, [fetchURL]);

  const getMovies = async () => {
    const response = await axios(fetchURL);
    setMovies(response.data.results);
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((movie, index) => {
            return <Movie movie={movie} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
