export default function TopProducts({id, img, cardTitle, cardDescription}) {
  return (
    <>
      <section>
        <article id={id}>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={img}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cardTitle}</h2>
              <p>{cardDescription}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Comprar ! JÁ !</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
