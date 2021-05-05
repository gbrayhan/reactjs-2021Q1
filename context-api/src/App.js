import Navbar from "@components/Navbar";
import MovieList from "@components/MovieList";
import { UserProvider } from "./context/UserContext";
import { MoviesProvider } from "./context/MoviesContext";

function App() {
  return (
    <div>
      <UserProvider>
        <Navbar />
        <MoviesProvider>
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
