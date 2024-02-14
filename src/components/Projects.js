import { Col, Container, Row, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav'
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import TrackVisibility from "react-on-screen"
import "animate.css"

import QSC from "../assets/img/experience/qsc.jpeg"
import QTMA from "../assets/img/experience/qtma.jpeg"
import PST from "../assets/img/experience/Pebble Shore Technologies Inc..png"
import QCBT from "../assets/img/experience/qcbt.png"
import QVEX from "../assets/img/experience/qvex.jpeg"
import QRCT from "../assets/img/experience/qrct.jpeg"
import Kemetco from "../assets/img/experience/kemetco.jpeg"

export const Projects = () => {

    const experience = [
        {
            title: "Queen's Startup Consulting",
            description: "Working as a Technical Consultant",
            imgUrl: QSC,
        },
        {
            title: "Queen's Tech and Media Association",
            description: "Working as a Junior Developer",
            imgUrl: QTMA,
        },
        {
            title: "PebbleShore Technologies",
            description: "Working as a Full-Stack Developer for Microsoft Teams App.",
            imgUrl: PST,
        },
        {
            title: "Queen's Conference on Business and Technology",
            description: "Current Co-Chair",
            imgUrl: QCBT,
        },
        {
            title: "Queen's VEX Robotics Team",
            description: "Worked on the Electronics Team",
            imgUrl: QVEX,
        },
        {
            title: "Queen's Relectric Car Team",
            description: "Worked as a Battery Team Specialist",
            imgUrl: QRCT,
        },
        {
            title: "Kemetco Research",
            description: "Worked as a Student Intern",
            imgUrl: Kemetco,
        },

    ]

    const projects = [

    ]

    const photography = [

    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                        {({ isVisable }) => 
                        <div className={isVisable ? "animated__animated animate__fadeIn" : ""}>

                            <h2>Projects</h2>
                            <p>This is where projects would go</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Photography</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {/* Experience */}
                                        {
                                            experience.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {/* Projects */}
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {/* Photography */}
                                        {
                                            photography.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />

            
        </section>
    )
}