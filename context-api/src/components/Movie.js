import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Movie = ({ movie }) => {
  const { user, toggleFavMovie } = useContext(UserContext);
  const isFavorite = user?.favoriteMovies?.includes(movie.id);
  return (
    <div className="card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover", objectPosition: "top" }}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>
        {user && (
          <button
            className={`btn ${
              isFavorite ? "btn-success" : "btn-outline-primary"
            }`}
            onClick={() => toggleFavMovie(movie.id)}
          >
            Favorito
          </button>
        )}
      </div>
    </div>
  );
};

export default Movie;
