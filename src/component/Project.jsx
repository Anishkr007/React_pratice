function Project({ title, des, tech, onView }) {

    return (
        <div>
            <h2>{title}</h2>

            <p>{des}</p>

            <p>Technology: {tech}</p>

            <button onClick={() => onView(title)}>
                View Project
            </button>
        </div>
    );
}

export default Project;