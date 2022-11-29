import React from "react";
import { Chrono } from "react-chrono";
import { timeline } from "./Constants/data";

const Timeline = () => {
    return (
        <div className="timeline">
            <Chrono
                items={timeline}
                mode="VERTICAL_ALTERNATING"
                theme={{
                    primary: "black",
                    secondary: "red",
                    cardBgColor: "grey",
                    cardForeColor: "white",
                    titleColor: "black",
                    titleColorActive: "white",
                }}
            />
        </div>
    );
};

export default Timeline;
