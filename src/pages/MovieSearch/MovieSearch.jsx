import { useParams } from "react-router-dom";
import DesignMovies from "../../component/designMovies/DesignMovies";
import axiosInstance from "../../axios/axiosInst";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import NotFound from "../../component/NotFoundTemp/NotFound";

export default function MovieSearch() {
  const [movieSearch, setMovieSearch] = useState([]);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true); 
  const { search } = useParams();
  const language = useSelector((state) => state.lang.language);

  useEffect(() => {
    async function fetchData() {
      setLoading(true); 
      try {
        let res = await axiosInstance.get(`search/movie`, {
          params: {
            query: search,
            language,
            page: counter,
          },
        });

        setMovieSearch(res.data.results);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    }
    fetchData();
  }, [language, counter, search]);

  const next = () => {
    setCounter(counter + 1);
  };

  const prev = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Button className="m-5">
            <Spinner
              component="span"
              size="sm"
              className="me-5"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>      ) : movieSearch.length === 0 ? (
        <NotFound /> 
      ) : (
        <>
          <DesignMovies movies={movieSearch} />
          <div className="text-center py-5">
            <Button
              className="btn-btn-primary mx-4"
              onClick={next}
            >
              next
            </Button>
            <Button
              className={`btn-btn-primary me-5 ${counter === 1 ? "d-none" : ""}`}
              onClick={prev}
            >
              prev
            </Button>
          </div>
        </>
      )}
    </>
  );
}
