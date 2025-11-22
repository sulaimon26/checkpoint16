import { useState } from "react";
import MovieList from "./components/movielist"; 
import Filter from "./components/filter";
import "./App.css";


export default function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A dream inside a dream thriller",
      posterURL: "https://picsum.photos/300?random=1",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A sci-fi journey across space and time",
      posterURL: "https://picsum.photos/300?random=2",
      rating: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const addMovie = () => {
    const title = prompt("Title:");
    const description = prompt("Description:");
    const posterURL = prompt("Poster URL:");
    const rating = Number(prompt("Rating (1-5):"));
    setMovies([...movies, { title, description, posterURL, rating }]);
  };

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      m.rating >= filterRate
  );

  return (
    <div className="container">
      <h1 className="title">🎬 Movie Library</h1>

      <Filter setFilterTitle={setFilterTitle} setFilterRate={setFilterRate} />

      <button className="add-btn" onClick={addMovie}>
        ➕ Add Movie
      </button>

      <MovieList movies={filteredMovies} />
    </div>
  );
}
