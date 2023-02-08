import React from "react";

// Roouter Stuffs
import { Link } from "react-router-dom";

// Layouts
import Container from "../Container";

// Styles
import styles from "./Navbar.module.css";

// Assets
import logo from "../../../assets/imgs/costs_logo.png";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to={"/"}>
                    <img src={logo} alt="Logo da empresa" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={"/projects"}>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={"/contact"}>Contatos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to={"/company"}>Sobre</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar;
