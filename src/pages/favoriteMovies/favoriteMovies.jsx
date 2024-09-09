// import React from 'react'

import { useSelector } from "react-redux";
import DesignMovies from "../../component/designMovies/DesignMovies";
import { Alert } from "react-bootstrap";

export default function FavoriteMovies() {
  const favorite = useSelector((state) => state.favMovie.movies);
  const language = useSelector((state) => state.lang.language);

  console.log(favorite);

  return (
    <>
      {favorite.length == 0 ? (
        <div className=" p-5">
          <Alert
            className="bg-danger text-white"
            style={language == "en" ? { width: 288 } : { width: 233 }}
          >
            {language == "en"
              ? "you dont have favorite movies"
              : " ليس لديك افلام مفضلة "}
            <div
              className="mx-2 text-danger"
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                display: "inline-block",
                textAlign: "center",
                width: 24,
                height: 24,
              }}
            >
              !
            </div>
          </Alert>
        </div>
      ) : (
        <div className="py-5">
          <DesignMovies movies={favorite} />
        </div>
      )}
    </>
  );
}
