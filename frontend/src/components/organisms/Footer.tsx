import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = (): JSX.Element => {
    return (
        <footer>
            <Container fluid>
                <Row className="mt-5">
                    <Col className="bg-dark text-white text-center py-5">Copyright &copy;</Col>
                </Row>
            </Container>
        </footer>
    );

};

export default Footer;