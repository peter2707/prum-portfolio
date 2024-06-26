import React from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';

const Modal = ({ data, close }) => {
    const { imageUrl, title, description, tags, source } = data;

    const modalVariants = {
        open: {
            opacity: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.2 },
        },
        closed: { opacity: 0 },
    };

    const imageVariants = {
        open: { opacity: 1, y: "0vh" },
        closed: { opacity: 0, y: "-10vh" },
    };

    const modalInfoVariants = {
        open: { opacity: 1, transition: { staggerChildren: 0.2 } },
        closed: { opacity: 0 },
    };

    const modalRowVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "10%" },
    };

    // Function to split the description into an array of lines
    const splitDescription = () => {
        return description.split('\n').map((line, index) => (
            <li key={index}>• {line.trim()}<br/><br/></li>
        ));
    };

    return (
        <motion.div
            className="modal"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
        >
            <motion.img
                className="modal__image"
                alt="project picture"
                src={imageUrl}
                variants={imageVariants}
            ></motion.img>
            <motion.div className="modal__info" variants={modalInfoVariants}>
                <motion.div className="modal__row" variants={modalRowVariants}>
                    <span className="modal__title">{title}</span>
                </motion.div>
                <motion.div className="modal__row" variants={modalRowVariants}>
                    {(() => {
                        const tagArray = [];
                        for (let i = 0; i < tags.length; i++) {
                            tagArray.push(
                                <Feature iconName={String(tags[i])} key={i} />
                            );
                        }
                        return tagArray;
                    })()}
                </motion.div>
                <motion.div
                    className="modal__description-wrapper"
                    variants={modalRowVariants}
                >
                    <ul className="modal__description"> {splitDescription()}</ul>
                </motion.div>
                <motion.div className="modal__row" variants={modalRowVariants}>
                    <a href={source} className="modal__btn"><FaGithub size={25}/><span className="ms-2">Source Code</span></a>
                </motion.div>
                <motion.button
                    className="modal__close-wrapper"
                    whileHover={{ scale: 1.2 }}
                    onClick={close}
                >
                    <IoCloseCircleOutline className="modal__close-icon" />
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Modal;