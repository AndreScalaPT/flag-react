export default function Testimonial() {
  return (
    <>
      <div className="card card-side bg-[#B03813] shadow-sm max-w-120">
        <figure>
          <img className="min-w-[200px] min-h-[280px]"
            src="imgs/Rating-CR7.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Os melhores produtos aos melhores preços!</h2>
          <p>Nem sei como explicar. Comprei um T20 Tri-Plex com uma varanda incrível!
             A Água Desidatrada é fenomenal, não digam a ninguém, mas é o meu segredo
             para o sucesso.
             SSSSSÍIIIIIIMMMMM!
          </p>
          <div className="card-actions flex flex-col items-end">
            <p>Classificação</p>
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
