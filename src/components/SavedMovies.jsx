import { useState, useEffect } from "react";
import { useAuthContext } from "../context/auth";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { db } from "../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 1000;
  };

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteMovie = async (id) => {
    try {
      const result = movies.filter((movie) => movie.id !== id);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">Saved movies</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => {
            return (
              <div
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.image}`}
                  alt={movie?.title}
                  className="w-full h-auto block"
                />
                <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="text-xs md:text-sm flex justify-center items-center h-full text-center">
                    {movie?.title}
                  </p>
                  <p
                    className="absolute text-gray-300 top-4 right-4"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default SavedMovies;
