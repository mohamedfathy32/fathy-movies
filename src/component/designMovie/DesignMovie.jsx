/* eslint-disable react/prop-types */
import { Col, Image, Row, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { StringsManager } from "../../const";
import "./DesignMovie.css";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function DesignMovie(props) {
  const language = useSelector((state) => state.lang.language);

  const openTrailer = () => {
    window.open(`https://www.youtube.com/watch?v=${props.video}`, "_blank");
  };

  return (
    <>
      <Row
        className="m-0 p-3 p-md-5 w-100"
        style={{
          backgroundColor: "#232323",
          color: "#fff",
          backgroundImage: `linear-gradient(rgba(60, 35, 35, 0.7), rgba(60, 35, 35, 0.7)), url(https://image.tmdb.org/t/p/original${props.backDrop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Col className="px-3 px-md-5 mb-4 mb-md-0" md={4} xs={12}>
          <Image
            src={`${StringsManager.baseUrlImg}${props.posterImg}`}
            fluid
            style={{ height: "auto", maxHeight: "500px", width: "100%" }}
          />
        </Col>
        <Col className="px-3 px-md-5" md={8} xs={12}>
          <h1 className="fs-4 fs-md-1">{props.name}</h1>
          <p className="fs-6 fs-md-5">
            {props.release_date} (US){" "}
            {props.genres?.map((movie) => `${movie.name}, `)} • {props.runtime}
          </p>
          <div className="d-flex flex-column flex-md-row align-items-md-center my-3">
            <h5 className="text-white fs-5 fs-md-4 mb-3 mb-md-0">
              {props.vote}
            </h5> 
            <span className="fs-6 fs-md-5 px-md-3">{language=='en'?'User Score':' تقيم المستخدم '}</span>
            <div>
              <Button onClick={openTrailer} className="rounded-4 mt-2 mt-md-0">
                <div className="d-flex justify-content-between align-items-center">
                  <FaPlay
                    className={`ms-1 me-3 ${
                      language == "en" ? "d-block" : "d-none"
                    }`}
                  />
                  {language == "en" ? "Watch Trailer" : "مشاهدة الإعلان"}
                  <FaPlay
                    className={`ms-1 me-3 ${
                      language == "en" ? "d-none" : "d-block"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
          <hr style={{ backgroundColor: "#fff" }} />
          <h2 className="fs-5 fs-md-3">
            {language == "en" ? "Overview" : "نبذة"}
          </h2>
          <p className="fs-6 fs-md-5">{props.overview}</p>
          <hr style={{ backgroundColor: "#fff" }} />

          <iframe
            width="100%"
            height="350px"
            src={`https://www.youtube.com/embed/${props.video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
      <h2 className="fs-5 px-2 mt-4 text-white">
        {language == "en" ? "Top Billed Cast" : "أبرز الممثلين"}
      </h2>
      <Swiper
      key={language}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
      >
        {props.movieCast.map(({ id, character, name, profile_path }) => (
          <SwiperSlide key={id} className="p-2">
            <div className="card" style={{ width: "100%" }}>
              <img
                src={StringsManager.baseUrlImg + profile_path}
                className="card-img-top"
                alt={name}
              />
              <div
                className="card-body"
                style={{ backgroundColor: "#2d2d2d", height: 130 }}
              >
                <h5 className="card-title text-white">{name}</h5>
                <p className="card-text text-white">{character}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
