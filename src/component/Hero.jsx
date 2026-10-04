function Hero(props) {
    return (
        <section>
            <h1>Hello, I'm {props.name}</h1>
            <p>{props.role}</p>
            <p>My age: {props.age}</p>
        </section>
    );
}

export default Hero;