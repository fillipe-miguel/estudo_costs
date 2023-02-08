import React from "react";

// React Router
import { useLocation } from "react-router-dom";

// Components
import Container from "../../layout/Container";
import LinkButton from "../../layout/LinkButton";
import Message from "../../layout/Message";

// Styles
import style from "./style.module.css";

const Projects = () => {
    const location = useLocation();
    console.log(location);
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
                <p>Projetos</p>
            </Container>
        </div>
    );
};

export default Projects;
