import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DesignMovie from "../../component/designMovie/DesignMovie";
import axiosInstance from "../../axios/axiosInst";
import DesignMovies from "../../component/designMovies/DesignMovies";
import { useSelector } from "react-redux";

export default function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});
  const [cast, setCast] = useState([]);
  const [movieSuggestions, setMovieSuggestions] = useState([]);
  const language = useSelector((state) => state.lang.language);

  useEffect(() => {
    async function fetchData() {
      let res = await axiosInstance.get(`/movie/${id}`, {
        params: {
          language: language,
        },
      });
      console.log(res.data);

      setMovie(res.data);
      console.log(movie);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language]);
  useEffect(() => {
    async function fetchData() {
      let videoData = await axiosInstance.get(`/movie/${id}/videos`);
      console.log(videoData.data);
      const trailer = videoData.data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      setVideo(trailer || {}); // Ensure trailer is either an object or empty object
      console.log(trailer);
    }
    fetchData();
  }, [id]);
  

  useEffect(() => {
    async function fetchData() {
      let res = await axiosInstance.get(`/movie/${id}/credits`, {
        params: {
          language: language,
        },
      });
      console.log(res.data.cast);

      setCast(res.data.cast.slice(0, 9));
      console.log(cast);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language]);

  useEffect(() => {
    async function fetchData() {
      let res = await axiosInstance.get(`/movie/${id}/similar?`, {
        params: {
          language: language,
        },
      });
      console.log(res.data.results);

      setMovieSuggestions(res.data.results);
    }
    fetchData();
  }, [id, language]);

  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
  console.log(video.key);

  return (
    <>
      <DesignMovie
        name={movie.title}
        backDrop={movie.backdrop_path}
        movie={movie}
        posterImg={movie.poster_path}
        release_date={movie.release_date}
        vote={movie.vote_average}
        overview={movie.overview}
        genres={movie.genres}
        runtime={convertMinutesToHours(movie.runtime)}
        video={video.key|| null}
        movieCast={cast}
      />
      {movieSuggestions.length != 0 ? (
        <>
          {language == "en" ? (
            <p className="mt-5 fs-5 text-white w-lg-50 text-center"style={{marginInline:'auto'}}>
              If you enjoyed watching <strong>{movie.title}</strong>,check out
              these similar movies. They share genre, plot, or cast. Discover
              more films that match your taste!
            </p>
          ) : (
            <p className="mt-5 fs-5 text-white w-lg-50 text-center"style={{marginInline:'auto'}}>
              إذا أعجبك فيلم <strong>{movie.title}</strong>،اكتشف هذه الأفلام
              المشابهة. تشترك في النوع أو القصة أو حتى الطاقم. استمتع بأفلام
              تناسب ذوقك السينمائي!
            </p>
          )}
        </>
      ) : (
        ""
      )}

      <DesignMovies movies={movieSuggestions} className="m-0" />
    </>
  );
}
