import React from "react";

// Styles
import style from "./style.module.css";

// Assets
import savings from "../../../assets/imgs/savings.svg";
import LinkButton from "../../layout/LinkButton";

const Home = () => {
    return (
        <section className={style.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to={"/newproject"}>Criar Projeto</LinkButton>
            <img src={savings} alt="Costs" />
        </section>
    );
};

export default Home;
