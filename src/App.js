import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import JobTitle from "./components/JobTitle";

function App() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 className="heading">Hi There!
                                <span
                                    className="wave"
                                    role="img"
                                    aria-labelledby="wave"
                                >
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
								I'm{" "}
                                <strong className="main-name">
                                	Monkolsophearith Prum
                                </strong>
                            </h1>

                            <div>
                                <JobTitle />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default App;
