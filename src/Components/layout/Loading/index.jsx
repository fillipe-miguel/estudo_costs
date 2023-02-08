import React from "react";

// Style
import style from "./style.module.css";

// Assets
import loadingSvg from "../../../assets/imgs/loading.svg";

const Loading = () => {
    return (
        <div className={style.loader_container}>
            <img className={style.loader} src={loadingSvg} alt="Loading" />
        </div>
    );
};

export default Loading;
