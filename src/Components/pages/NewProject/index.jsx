import React from "react";
// React Router
import { useNavigate } from "react-router-dom";

// Components
import ProjectForm from "../../project/ProjectForm";

// Styles
import style from "./style.module.css";

const NewProject = () => {
    const history = useNavigate();

    function createPost(project) {
        // inicializando cost e o sevices
        project.costs = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then((resp) => {
                resp.json();
            })
            .then((data) => {
                history("/projects", {
                    state: { message: "Projeto criado com sucesso!" },
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className={style.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    );
};

export default NewProject;
