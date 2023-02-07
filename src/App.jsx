import React from "react";

// ReactRouter stuffs
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// Layouts
import Container from "./Components/layout/Container";

// Pages
import Company from "./Components/pages/Company";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import NewProject from "./Components/pages/NewProject";

const App = () => {
    return (
        <Router>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contatos</Link>
                <Link to={"/company"}>Sobre</Link>
                <Link to={"/newproject"}>Criar novo projeto</Link>
            </div>

            <Container customClass="min-height">
                <Routes>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/newproject" element={<NewProject />} />
                </Routes>
            </Container>

            <h1>Footer</h1>
        </Router>
    );
};

export default App;
