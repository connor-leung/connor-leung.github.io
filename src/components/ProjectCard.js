import "./ProjectCard.css"

export const ProjectCard = ({ title, description, imgUrl, url}) => {

    const projectPage = () => {
        window.open(url, '_blank')
    }

    return (
        <div className="project-box">
            <button onClick={projectPage}>
            <h3>{title}</h3>
                <img className="image" src={imgUrl} alt={title} />
                <div className="text">
                    <p className="description">
                        {description}
                    </p>
                </div>
                <button className="project-button" onClick={projectPage}>
                    <span className="button-text">View Project</span>
                </button>
            </button>
        </div>
    )
}

export default ProjectCard