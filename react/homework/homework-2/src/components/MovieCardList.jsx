import MovieCard from "./MovieCard";

const MovieCardList = ({ movieData }) => {
  
  /* Se não existir data a importar *erro* senão avança */  
  if (!movieData || movieData.length === 0) {
    return <p>Não existe data disponível!</p>;
  }

  return (
    <ul className="movie-card-list">

      {/* Faço dentro o destructuring, assim não preciso escrever
      abaixo sempre movie.wathever */}


      {movieData.map(({id, cover, title, year, director, synopsis, actors}) => (
        <MovieCard
          key={id}
          cover={cover}
          title={title}
          year={year}
          director={director}
          synopsis={synopsis}
          actors={actors}
        />
      ))}

    </ul>
  );
};

export default MovieCardList;
