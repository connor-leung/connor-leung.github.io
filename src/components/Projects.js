import React, { useEffect, useRef } from 'react';
import { Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css"; 
import "./Projects.css";
import ListOfProjects from "./ListOfProjects";

export const Projects = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInRight');
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        projectRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section className="project" id="project">
            <Container className="project-lists">
                <h2>Projects</h2>
                <div className="d-flex flex-column align-items-center">
                    {ListOfProjects.map((project, index) => {
                        const setRef = (el) => {
                            projectRefs.current[index] = el;
                        };

                        return (
                            <div ref={setRef} className="project-card-wrapper" key={index}>
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    imgUrl={project.imgUrl}
                                    url={project.url}
                                />
                            </div>
                        );                   
                    })}
                </div>
            </Container>
        </section>
    );
};
