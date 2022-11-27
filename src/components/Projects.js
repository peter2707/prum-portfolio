import React from "react";
import Card from "./Card";
import { projects } from "./Constants/data";

const Project = () => {
    return (
        <div className="projects">
            {projects.map((item) => (
                <Card data={item} key={item.id} />
            ))}
        </div>
    );
};

export default Project;
