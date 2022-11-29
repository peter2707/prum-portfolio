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
                    primary: "grey",
                    secondary: "red",
                    cardBgColor: "white",
                    cardForeColor: "black",
                    titleColor: "grey",
                    titleColorActive: "white",
                }}
            />
        </div>
    );
};

export default Timeline;
