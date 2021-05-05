import React, { createContext, useState } from "react";

const initialUser = {
  id: 1,
  name: "Alejandro Guerrero",
  favoriteMovies: [1, 2],
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };
  const logout = () => {
    setUser(null);
  };

  const toggleFavMovie = (movieID) => {
    const isFavorite = user?.favoriteMovies?.includes(movieID);

    const favMovies = isFavorite
      ? user.favoriteMovies.filter((movie) => movie !== movieID)
      : [...user.favoriteMovies, movieID];
    setUser({ ...user, favoriteMovies: favMovies });
  };

  const data = { user, login, logout, toggleFavMovie };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

const UserContext = createContext(undefined, undefined);

export { UserProvider };
export default UserContext;
