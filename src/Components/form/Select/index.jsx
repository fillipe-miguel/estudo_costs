import React from "react";

// Style
import style from "./style.module.css";

const Select = ({ text, name, options, handleOnChange, value }) => {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    );
};

export default Select;
