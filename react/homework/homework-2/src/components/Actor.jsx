const Actor = ({ avatar, name }) => {

    return (
        <section className="actor-container">
            <img className="actor-avatar" src={avatar} />
            <p className="actor-name">{name}</p>
        </section>
    );
}

export default Actor;