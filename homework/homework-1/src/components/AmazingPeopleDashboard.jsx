import AmazingPeopleListCards from "./AmazingPeopleListCards";

const AmazingPeopleDashboard = ({ people }) => {
  return (
    <section className="dashboard">
      <h1>Amazing People</h1>
      <AmazingPeopleListCards people={people} />
    </section>
  );
};

export default AmazingPeopleDashboard;
