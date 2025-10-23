// função (componente) com o destructuring em vez de prop.name, etc
const AmazingPeopleCard = ({ name, role, intro, image, link }) => {

    return (

        <li className="card">
            <figure className="img-wrapper">
                <img src={image} alt={name} className="avatar" />
                <h3> {name} </h3>
                <span className="role"> {role} </span>
            </figure>
            <p> {intro} </p>
            <a href={link} className="more-link">ler mais...</a>
        </li>

    );
}

export default AmazingPeopleCard;