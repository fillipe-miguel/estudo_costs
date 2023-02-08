import React from "react";

// Style
import style from "./style.module.css";

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                required
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
            />
        </div>
    );
};

export default Input;
