import React, { useState, useEffect } from "react";

// React Router
import { useLocation } from "react-router-dom";

// Components
import Container from "../../layout/Container";
import Loading from "../../layout/Loading";
import LinkButton from "../../layout/LinkButton";
import Message from "../../layout/Message";
import ProjectCard from "../../project/ProjectCard";

// Styles
import style from "./style.module.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [removeLoad, setRemoveLoad] = useState(false);

    useEffect(() => {
        // Esse setTimeout serve para simular o atraso de uma requisisção http normal em um servidor remoto
        setTimeout(() => {
            // Pegando os projetos do banco de dados!
            fetch("http://localhost:5000/projects", {
                type: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProjects(data);
                    setRemoveLoad(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 324);
    }, []);

    const location = useLocation();
    let message = "";

    if (location.state) {
        message = location.state.message;
    }

    return (
        <div className={style.projects_container}>
            <div className={style.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to={"/newproject"}>Criar Projeto</LinkButton>
            </div>
            {message && <Message type="success" message={message} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    ))}
                {!removeLoad && <Loading />}
                {removeLoad && projects.length == 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    );
};

export default Projects;
