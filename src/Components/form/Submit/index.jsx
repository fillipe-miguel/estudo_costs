import React from "react";

// Style
import style from "./style.module.css";

const Submit = ({ text }) => {
    return (
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    );
};

export default Submit;
