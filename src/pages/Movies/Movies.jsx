import DesignMovies from "../../component/designMovies/DesignMovies";
import { useDispatch, useSelector } from "react-redux";
import { moviesAction } from "../../store/slices/movies";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";

export default function Movies() {

  const [counter, setCounter] = useState(1);

  const next = () => {
    setCounter(counter + 1);
    dispath(moviesAction(counter));
  };
  const prev = () => {
    setCounter(counter - 1);
    dispath(moviesAction(counter));
  };

  const mov = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const language = useSelector((state) => state.lang.language);
  const dispath = useDispatch();

useEffect(() => {
    dispath(moviesAction({counter:counter,language:language}));
    console.log(mov);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter ,language ]);

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
        </div>
      ) : (
        // <h1 className="text-center"> اصبر يا نجم النت عندك ضيعف </h1>
        <>

          <DesignMovies movies={mov} />
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
      )}
    </>
  );
}
