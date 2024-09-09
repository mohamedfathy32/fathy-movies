import { Button } from "react-bootstrap";
import DesignMovies from "../../component/designMovies/DesignMovies";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInst";

export default function MoviesNowPlaying() {
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      let res = await axiosInstance.get("/movie/now_playing", {
        params: {
          page: counter,
        },
      });
      setMovies(res.data.results);
    }
    fetchMovies();
  }, [counter]);
  const next = () => {
    setCounter(counter + 1);
  };
  const prev = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      
      <DesignMovies movies={movies} />
      <div className="text-center my-5">
        <Button
          className={`btn-btn-primary me-5 ${counter == 1 ? "d-none" : ""}`}
          onClick={() => {
            prev();
          }}
        >
          prev
        </Button>
        <Button
          className="btn-btn-primary"
          onClick={() => {
            next();
          }}
        >
          next
        </Button>
      </div>
    </>
  );
}
