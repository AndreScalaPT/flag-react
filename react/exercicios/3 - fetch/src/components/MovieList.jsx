import { useState } from "react"

function MovieList() {
    const [films, setFilms] = useState([]);

    fetch("https://swapi.dev/api/films")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setFilms(result.results);
    });

  return (
    <>
      <ul>
        {films.map((value) => (
          <li>{value.title}</li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
