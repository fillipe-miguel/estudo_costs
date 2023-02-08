import React, { useState, useEffect } from "react";

import style from "./style.module.css";

const Message = ({ type, message }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!message) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [message]);

    return (
        <>
            {visible && (
                <div className={`${style.message} ${style[type]}`}>
                    {message}
                </div>
            )}
        </>
    );
};

export default Message;
