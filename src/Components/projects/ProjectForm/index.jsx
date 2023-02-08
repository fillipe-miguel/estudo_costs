import React, { useState, useEffect } from "react";

// Components
import Input from "../../form/Input";
import Select from "../../form/Select";
import Submit from "../../form/Submit";

// Style
import style from "./style.module.css";

const ProjectForm = ({ btnText }) => {
    const [categories, setCategories] = useState([]);

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

    return (
        <form className={style.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select
                name="category_id"
                text="Selecione uma categoria"
                options={categories}
            />
            <Submit text={btnText} />
        </form>
    );
};

export default ProjectForm;
