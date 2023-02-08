import React from "react";

// React Router
import { Link } from "react-router-dom";

// Icons
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

// Style
import style from "./style.module.css";

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
    function remove(e) {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <div className={style.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={style.category_text}>
                <span className={`${style[category.toLowerCase()]}`}></span>{" "}
                {category}
            </p>
            <div className={style.project_card_actions}>
                <Link to={`/projects/${id}`}>
                    <BsPencil />
                    Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Remover
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
