import React from "react";

// Router Stuffs
import { Link } from "react-router-dom";

import style from "./style.module.css";

const LinkButton = ({ to, children }) => {
    return (
        <Link className={style.link} to={to}>
            {children}
        </Link>
    );
};

export default LinkButton;
