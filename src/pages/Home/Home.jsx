// import React from 'react'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DesignMovies from "../../component/designMovies/DesignMovies";
import axiosInstance from "../../axios/axiosInst";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(1);
  const language = useSelector((state) => state.lang.language);
  const nav = useNavigate();

  useEffect(() => {
    async function fetchMovies() {
      let res = await axiosInstance.get("/movie/top_rated", {
        params: {
          language: language,
          page: counter,
        },
      });

      setMovies(res.data.results);
    }
    fetchMovies();
  }, [language,counter]);
  const handleInputSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSearch = () => {
    nav(`/mov/${search}`);
  };


  const next = () => {
    setCounter(counter + 1);
  };
  const prev = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div
        className="hero-section text-light d-flex align-items-center"
        style={{
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-gritty-cinematic-backdrop-a-luxurious-and-elegant-3d-rendering-of-a-image_3805012.jpg')`, // ضع هنا رابط الصورة
          backgroundColor: "#0d0d0d",
          backgroundSize: "contain",
          backgroundPosition: "center",
          padding: "100px 0",
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10} lg={8}>
              <h1 className="display-4 font-weight-bold">
                {language == "en" ? "Welcome." : "مرحبا"}
              </h1>
              <p className="lead">
                {language == "en"
                  ? "Millions of movies, TV shows and people to discover. Explore now."
                  : "ملايين الأفلام والبرامج التلفزيونية والشخصيات التي يمكنك اكتشافها. استكشف الآن."}
              </p>

              <InputGroup
                className="mt-4"
                style={{ maxWidth: "600px", margin: "0 auto" }}
                onChange={(e) => {
                  handleInputSearch(e);
                }}
              >
                <Form.Control
                  controlId="inputSearch"
                  type="search"
                  placeholder={
                    language == "en"
                      ? "Search for a movie, tv show..."
                      : " ابحث عن فيلم، مسلسل تلفزيوني... "
                  }
                  aria-label="Search"
                  className="rounded-pill p-3"
                  style={{
                    backgroundColor: "#f0f0f0",
                    border: "none",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    zIndex: 2,
                  }}
                />
                <Button
                  variant="warning"
                  className="rounded-pill px-4"
                  onClick={() => {
                    handleSearch();
                  }}
                  style={{
                    marginLeft: language == "en" ? "-50px" : "0px",
                    marginRight: language == "ar" ? "-50px" : "0px",
                    backgroundColor: "#d4af37",
                    border: "none",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    color: "white",
                    zIndex: 3,
                  }}
                >
                  {language == "en" ? "Search" : "بحث"}
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <h3 className="text-white mt-5 px-5">
        {language == "en" ? "Movies Top Rated 🔥" : "الأفلام الأعلى تقييمًا 🔥"}
      </h3>
      <DesignMovies movies={movies} />

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
