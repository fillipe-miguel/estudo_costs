import React from "react";

// Components
import ProjectForm from "../../projects/ProjectForm";

// Styles
import style from "./style.module.css";

const NewProject = () => {
    return (
        <div className={style.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm />
        </div>
    );
};

export default NewProject;
