import React from "react";

// Icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={style.copy_write}>
                <span>Costs</span> &copy; 2023
            </p>
        </footer>
    );
};

export default Footer;
