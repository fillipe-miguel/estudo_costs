import React from "react";

// React Router
import { useLocation } from "react-router-dom";

// Components
import Message from "../../layout/Message";

const Projects = () => {
    const location = useLocation();
    console.log(location);
    let message = "";

    if (location.state) {
        message = location.state.message;
    }

    return (
        <div>
            <h1>Meus projetos</h1>
            {message && <Message type="success" message={message} />}
        </div>
    );
};

export default Projects;
