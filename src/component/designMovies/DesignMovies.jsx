/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removeMovie, setMovie } from "../../store/slices/favMovie";
import { StringsManager } from "../../const";
import "./DesignMovies.css";
export default function DesignMovies(props) {
  const [fav, setFav] = useState("");
  const [notFav, setNotFav] = useState("");
  const language = useSelector((state) => state.lang.language);
  const nav = useNavigate();
  const favoriteMovies = useSelector((state) => state.favMovie.movies);
  const dispatch = useDispatch();
  const GoToDetails = (id) => {
    nav(`/movie/${id}`);
  };

  const favMovie = (id) => {
    const favMov = props.movies.find((movie) => movie.id === id);
    setFav(favMov.title);
    if (!favoriteMovies.find((ele) => ele.id === favMov.id)) {
      dispatch(setMovie(favMov));
    }
    setTimeout(() => {
      setFav(null);
    }, 2000);
  };

  const notFavMovie = (id) => {
    const favMov = props.movies.find((movie) => movie.id === id);
    setNotFav(favMov.title);
    setTimeout(() => {
      setNotFav(null);
    }, 2000);
    dispatch(removeMovie(favMov));
  };

  return (
    <>
      <div className="position-fixed left-5" style={{ top: "5%", zIndex: 3 }}>
        <div
          className={`alert alert-primary fade-in-top ${
            fav ? "d-flex" : "d-none"
          }`}
        >
          {language == "en"
            ? `You added ${fav} to your favorite list. ✔️`
            : ` لقد اضفت فيلم ${fav} الى قائمتك المفضله✔️ `}
        </div>
        <div
          className={`alert alert-danger fade-in-top ${
            notFav ? "d-flex" : "d-none"
          }`}
        >
          {language == "en"
            ? `You removed ${notFav} from your favorite list. ❌`
            : ` لقد ازلت فيلم ${notFav} الى قائمتك المفضله❌ `}
        </div>
      </div>
      <Row xs={2} md={4} sm={3} className="gy-5 g-lg-5 mx-lg-5  pt-5 me-0">
        {props.movies.map(({ id, title, vote_average, poster_path }) => (
          <Col key={id}>
            <Card className="card">
              <Card.Img
                variant="top"
                src={StringsManager.baseUrlImg + poster_path}
                className="card-img"
              />
              <Card.Body className="card-body">
                <Card.Title className="text-light" style={{ height: 40 }}>
                  {title}
                </Card.Title>
                <Card.Text id="text-muted">{vote_average?.toFixed(2)}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn px-lg-2 px-0"
                    id="btn-custom"
                    onClick={() => GoToDetails(id)}
                  >
                    {language === "en" ? "More details" : "مزيد من التفاصيل"}
                  </button>
                  <div className="fav-icon">
                    {favoriteMovies.find((ele) => ele.id === id) ? (
                      <MdFavorite onClick={() => notFavMovie(id)} />
                    ) : (
                      <MdFavoriteBorder onClick={() => favMovie(id)} />
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
