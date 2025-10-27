import AmazingPeopleCard from "./AmazingPeopleCard";

const AmazingPeopleListCards = ({ people }) => {
  return (
    <ul className="people-list">
      {
        (() => {
          if (people && people.length > 0) {
            const cards = [];

            for (let i = 0; i < people.length; i++) {

              const { name, role, intro, image, link } = people[i];
              const card = (
                <AmazingPeopleCard
                  key={i}
                  name={name}
                  role={role}
                  intro={intro}
                  image={image}
                  link={link}
                />
              );

              cards.push(card); // adicionar o cartão ao array
            }

            return cards;
          } else {
            return <p>Não existem pessoas.</p>;
          }
        })() // invoca a função!
      }
    </ul>
  );
};

export default AmazingPeopleListCards;