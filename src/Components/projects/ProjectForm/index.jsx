import React from "react";

// Style
import style from "./style.module.css";

const ProjectForm = () => {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto " />
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total" />
            </div>
            <select name="category_id">
                <option selected>Selecione a categoria</option>
            </select>
            <div>
                <input type="submit" value="Criar Projeto" />
            </div>
        </form>
    );
};

export default ProjectForm;
