import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Project = () => {
    const { id } = useParams();

    const [project, setProject] = useState();

    useEffect(() => {
        // Buscando project pelo id passado pela url
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(project);

    return <div>{id}</div>;
};

export default Project;
