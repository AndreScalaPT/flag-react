import Actor from "./Actor";

const MovieCard = ({ cover, title, year, director, synopsis, actors =  [] }) => {
  return (
    <section className="movie-card-container">
      <img className="movie-card-cover" src={cover} />
      
      <div className="movie-card-content">
        <h1 className="movie-card-title">{title}</h1>
        <span><strong>Ano:</strong> {year}</span>
        <span><strong>Diretor:</strong> {director}</span>
        <span><strong>Sinopse:</strong> {synopsis}</span>
      </div>

      <ul className="actor-list">

        {/* Uma vez que pode haver mais que um ator por filme iterei aqui o array dos atores
        e não no MovieCardList para deixar exclusiva função listar todos os cards.
        Posso assim futuramente listar coisas diferentes */}

        {actors.map(({ avatar, name }, i) => (
          <li key={i}>
            <Actor avatar={avatar} name={name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieCard;