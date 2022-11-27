import React from "react";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import "./Feature.css";

const Feature = ({ iconName }) => {
    var Icon = {};
    if(iconName.slice(0, 2) === "Si"){
        Icon = Si[iconName];
    }else{
        Icon = Fa[iconName];
    }
    
    return (
        <div className="feature">
            <div className="feature__circle">
                <Icon className="feature__icon" />
            </div>
        </div>
    );
};

export default Feature;
