/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/slices/language";
import "./header.css";

export default function Header() {
  const state = useSelector((state) => state.lang.language);
  const nav = useNavigate();
  let dispatch = useDispatch();

  function arabic() {
    dispatch(changeLanguage(state === "en" ? "ar" : "en"));
  }

  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand className="my-2">
            <img
              src={
                state == "en"
                  ? '/logoEn.png'
                  : "/logoAr.png"
              }
              height={50}
              width={150}
              alt="fathy movies logo"
              className="logo" 
              onClick={() => {
                nav("/");
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 d-flex justify-content-center">
              <div className="mb-2 mb-lg-0 d-flex flex-column flex-lg-row">
                <NavLink
                  to="/"
                  className="m-2 text-decoration-none"
                  style={{ color: "white" }}
                >
                  {state === "en" ? "Home" : " الرئيسية "}
                </NavLink>

                <NavLink
                  to="/movies"
                  className="m-2 text-decoration-none"
                  style={{ color: "white" }}
                >
                  {state === "en" ? "Popular" : " شائعه "}
                </NavLink>

                <NavLink
                  to="/now_playing"
                  className="m-2 text-decoration-none"
                  style={{ color: "white" }}
                >
                  {state === "en" ? "Now Playing" : " يعرض الان "}
                </NavLink>

                <NavLink
                  to="/favoriteMovies"
                  className="m-2 text-decoration-none"
                  style={{ color: "white" }}
                >
                  {state === "en" ? "Favorite Movies" : " الافلام المفضلة "}
                </NavLink>
              </div>
            </Nav>
            <Button
              id="ar"
              onClick={arabic}
              className="bg-dark text-light border mx-2"
            >
              {state === "en" ? "عربى" : "English"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
