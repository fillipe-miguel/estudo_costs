import React, { useState, useEffect } from "react";

// Router
import { useParams } from "react-router-dom";

// Components
import Container from "../../layout/Container";
import Loading from "../../layout/Loading";

// Styles
import style from "./style.module.css";

const Project = () => {
    const { id } = useParams();

    const [showProjectForm, setShowProjectForm] = useState(false);
    const [project, setProject] = useState([]);

    // DB request
    useEffect(() => {
        let fakeServerTimeResponse = Math.random() * 3000;

        // Esse setTimeout utilizado para simular um atraso do servidor
        setTimeout(() => {
            // Buscando project pelo id passado pela url
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, fakeServerTimeResponse);
    }, [id]);

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return (
        <>
            {project.name ? (
                <div className={style.project_details}>
                    <Container customClass="column">
                        <div className={style.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button
                                className={style.btn}
                                onClick={toggleProjectForm}
                            >
                                {!showProjectForm ? "Editar projeto" : "Fechar"}
                            </button>
                            {!showProjectForm ? (
                                <div className={style.project_info}>
                                    <p>
                                        <span>Categoria:</span>{" "}
                                        {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de orçamento:</span> R$
                                        {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> R$
                                        {project.costs}
                                    </p>
                                </div>
                            ) : (
                                <div className={style.project_info}>
                                    <p>B</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Project;
