import React from "react";
import Zoom from "react-reveal/Zoom";
import Card from "./Card";
import { projects } from "./Constants/data";

const Project = () => {
    return (
        <Zoom bottom>
            <div className="projects">
                {projects.map((item) => (
                    <Card data={item} key={item.id} />
                ))}
            </div>
        </Zoom>
    );
};

export default Project;
