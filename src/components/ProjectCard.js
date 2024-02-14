import { Col } from "react-bootstrap"
import "./ProjectCard.css"

export const ProjectCard = ({ title, description, imgUrl}) => {

    const onClick = () => {
        window.location.href = "https://www.google.com"
    }

    return (
        <Col sm={6} md={4}>
            <button className="proj-imgbx" onClick={onClick}>
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </button>
        </Col>
    )
}