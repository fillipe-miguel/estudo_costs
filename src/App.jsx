import React from "react";

// ReactRouter stuffs
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import Container from "./Components/layout/Container";
import Footer from "./Components/layout/Footer/Footer";
import Navbar from "./Components/layout/Navbar/Navbar";

// Pages
import Company from "./Components/pages/Company";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home/Home";
import NewProject from "./Components/pages/NewProject";
import Projects from "./Components/pages/Projects";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Container customClass="min-height">
                <Routes>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/newproject" element={<NewProject />} />
                </Routes>
            </Container>

            <Footer />
        </Router>
    );
};

export default App;
