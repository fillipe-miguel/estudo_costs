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
    const [projectMessage, setProjectMessage] = useState("");

    let message;

    // Usado para traser os dados do DB quando a pagina renderiza
    useEffect(() => {
        let fakeServerTimeResponse = Math.random() * 3000;

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
        }, fakeServerTimeResponse);
    }, []);

    function removeProject(id) {
        // Removendo os projetos do DB
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                // Filtrando e passando uma nova lista de projetos para se renderizado na tela
                let filteredProjects = projects.filter(
                    (project) => project.id != id
                );
                setProjects(filteredProjects);

                // Atribuindo a menssagem para passar ao componente de mesnssagem
                setProjectMessage("Projeto Removido com Sucesso!");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Para pegar as informações passadas pelo call no new project
    const location = useLocation();

    // TODO: Refatorar essa forma de trazer as infos pois quando da refresh aparece de novo
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

            {projectMessage && (
                <Message type="success" message={projectMessage} />
            )}

            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            key={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            handleRemove={removeProject}
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
