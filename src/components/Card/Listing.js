import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
    const { imageUrl, title, tags } = data;

    return (
        <motion.div
            className="listing"
            onClick={open}
            whileHover={{ scale: 1.1 }}
        >
            <div className="listing__content">
                <div className="listing__image-container">
                    <img
                        className="listing__image"
                        alt="project img"
                        src={imageUrl}
                    />
                </div>
                <div className="listing__details">
                    <div className="listing__row">
                        <span className="listing__title">{title}</span>
                    </div>
                    <div className="listing__row">
                        {(() => {
                            const tagArray = [];
                            for (let i = 0; i < tags.length; i++) {
                                tagArray.push(<Feature iconName={String(tags[i])} key={i} />);
                            }
                            return tagArray;
                        })()}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Listing;
