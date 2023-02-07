import React from "react";

import styles from "./container.module.css";

const Container = ({ customClass, children }) => {
    return (
        <div className={`${styles.container} ${styles[customClass]}`}>
            {children}
        </div>
    );
};

export default Container;
