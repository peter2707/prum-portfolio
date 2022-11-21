import React, { useState } from "react";
import "./Projects.scss";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimesCircle } from 'react-icons/fa';

const wrapperVariants = {
    initial: {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        transition: { duration: 0.4 },
    },
    animate: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: { duration: 0.4, staggerChildren: 0.1 },
    },
    exit: {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        transition: { duration: 0.4 },
    },
};

const squareVariants = {
    initial: {
        opacity: 0,
        scale: 0.3,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
};

const Projects = () => {
    const [selectedSquare, setSelectedSquare] = useState(null);

    const renderSquares = () => {
        const squares = ["yellow", "green", "blue", "violet"];
        return squares.map((color, i) => (
            <motion.div
                key={i}
                className={`square square--${color}`}
                onClick={() => setSelectedSquare(color)}
                variants={squareVariants}
                transition={{ duration: 0.2, type: "spring" }}
            />
        ));
    };

    return (
        <div className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}` }>
            <AnimatePresence mode={"wait"} initial={false} >
                {selectedSquare ? (
                    <motion.div
                        className={`card card__wrapper card__wrapper--${selectedSquare}`}
                        key="card"
                        variants={wrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="card__header">
                            <h2 id="project-title">Lorem ipsum</h2>

                            <button onClick={() => setSelectedSquare(null)}>
                                <FaTimesCircle size={30}/>
                            </button>
                        </div>

                        <div className="card__content">
                            <div className="card__img-placeholder" />

                            <div id="project-description" className="card__text-placeholder">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Impedit ea neque quidem
                                exercitationem possimus.
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="cp-transition__squares-wrapper"
                        key="squares"
                        variants={wrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {renderSquares()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
