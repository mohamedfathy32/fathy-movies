// import React from 'react'

import { Button, Form } from "react-bootstrap";
import DesignMovies from "../../component/designMovies/DesignMovies";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInst";
import { useSelector } from "react-redux";

export default function MoviesTopRated() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const [counter, setCounter] = useState(1);
  const language = useSelector((state) => state.lang.language);

  useEffect(() => {
    async function fetchMovies() {
      let res =  await axiosInstance.get("/movie/top_rated", {
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
  const movieName = () => {
    setMovieSearch(document.getElementById("nameOfMovie").value);
  };
  const moviesAfterSearch = movies.filter((movie) => {
    return movie.vote_average>=movieSearch;
  });




console.log(movies);


  return (
    <>
      <div className="d-flex mx-5 mt-5 align-items-center">
        <label className="mx-4" htmlFor="nameOfMovie">
          {language == "en" ? "search by rate" : " افلام تقيمها اكبر من "}
        </label>
        <Form.Control
          min={0}
          max={10}
          id="nameOfMovie"
          type="number"
          className="w-25 rounded-5  p-2"
          onChange={() => {
            movieName();
          }}
          placeholder={
            language == "en" ? "enter min movie rate" : " ادخل اقل تقيم "
          }
        />
      </div>
      <DesignMovies movies={moviesAfterSearch} />
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
