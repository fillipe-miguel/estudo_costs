import React, { useState, useEffect } from "react";

// Components
import Input from "../../form/Input";
import Select from "../../form/Select";
import Submit from "../../form/Submit";

// Style
import style from "./style.module.css";

const ProjectForm = ({ btnText, handleSubmit, projectDada }) => {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectDada || {});

    // Requisição para o banco -> trazer as categorias
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(project);
        handleSubmit(project);
    };

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    const handleChangeCategory = (e) => {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    };

    return (
        <form onSubmit={submit} className={style.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ""}
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ""}
            />
            <Select
                text="Selecione uma categoria"
                name="category_id"
                handleOnChange={handleChangeCategory}
                value={project.category ? project.category.id : ""}
                options={categories}
            />
            <Submit text={btnText} />
        </form>
    );
};

export default ProjectForm;
