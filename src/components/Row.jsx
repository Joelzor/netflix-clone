import { useState, useEffect } from "react";
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
            return (
              <div
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                key={index}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                  alt={movie?.title}
                  className="w-full h-auto block"
                />
                <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="text-xs md:text-sm flex justify-center items-center h-full text-center">
                    {movie?.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
