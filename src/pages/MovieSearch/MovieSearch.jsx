// import React from 'react'
import { useParams } from "react-router-dom";
import DesignMovies from "../../component/designMovies/DesignMovies";
import axiosInstance from "../../axios/axiosInst";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export default function MovieSearch() {
  const [movieSearch, setMovieSearch] = useState([]);
  const [counter, setCounter] = useState(1);
  const { search } = new useParams();
  console.log(search);
  const language = useSelector((state) => state.lang.language);
  useEffect(() => {
    async function fetchData() {
      let res = await axiosInstance.get(`search/movie`, {
        params: {
          query: search,
          language,
          page: counter,
        },
      });
      console.log(res.data);

      setMovieSearch(res.data.results);
      console.log(movieSearch);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language,counter]);


  const next = () => {
    setCounter(counter + 1);
  };
  const prev = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <DesignMovies movies={movieSearch} />
      <div className="text-center py-5">
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
