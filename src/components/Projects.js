import { Col, Container, Row, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav'
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import TrackVisibility from "react-on-screen"
import "animate.css"
import "./Projects.css"
import ListOfProjects from "./ListOfProjects"


export const Projects = () => {
    return (
        <section className="project" id="project">
            <Container className="project-lists">
                <h2>Projects</h2>
                <div>
                    <ProjectCard 
                        title="ColorSharp" 
                        description="A colour matching app that uses machine learning to match colours to paint swatches." 
                        imgUrl={ListOfProjects[0].imgUrl} 
                    />
                </div>

                <div>
                    <ProjectCard 
                        title="ColorSharp" 
                        description="A colour matching app that uses machine learning to match colours to paint swatches." 
                        imgUrl={colorSharp2} 
                    />
                </div>

                <div>
                    <ProjectCard 
                        title="ColorSharp" 
                        description="A colour matching app that uses machine learning to match colours to paint swatches." 
                        imgUrl={colorSharp2} 
                    />
                </div>
            </Container>
        </section>
    )
}