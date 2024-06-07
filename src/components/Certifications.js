import React from "react";
import { certifications } from "./Constants/data";
import { Row, Col } from "react-bootstrap";

const Certifications = () => {
    return (
        <div className="certifications mt-3">
            {certifications.map((cert, index) => (
                <div key={index} className="mb-3">
                    <div className="cert-title">
                        <Row>
                            <Col sm={10}>
                                <h3>
                                    {cert.icon} {cert.title}
                                </h3>
                            </Col>
                            <Col sm={2}>
                                <p className="mt-1">{cert.year}</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="cert-details">
                        <ul className="skill">
                            {cert.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certifications;
