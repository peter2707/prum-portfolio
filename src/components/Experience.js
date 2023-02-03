import React from "react";
import Card from "react-bootstrap/Card";

const Experience = () => {
    return (
        <div className="experience">
            <Card className="experience-card">
                <Card.Body>
                    <Card.Title>
                        <h5>
                            <strong>Software Engineer | CMAA</strong>
                        </h5>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        2020 - Present
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                        At CMAA, I have been carrying out various job
                        responsibilities. Some of them are:
                        <ul>
                            <li>
                                Design and develop management system and
                                database collaboratively that improved the task
                                efficiency and contributed to 20% decrease in
                                annual expenses.
                            </li>
                            <li>
                                Develop and maintain the website resulting in
                                improved user-experience and boosted overall
                                visitor traffic by 50%.
                            </li>
                            <li>
                                Responsible for releasing new features and also
                                make sure post-release stability of products.
                            </li>
                            <li>
                                Developing procedures for system maintenance and
                                troubleshooting.
                            </li>
                            <li>
                                Collect and analyse information of victim of
                                land mines to form a dataset for AI studies that
                                are used to track and prevent explosions that
                                saved thousands of lives.
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Experience;
