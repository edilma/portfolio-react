import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export default function Trident() {
    return (
        <Container className="trident">
            <Row className="bg-danger">
                <Col> <h2>3 Things About Me</h2></Col>
            </Row>

            <Row className="bg-success">
                <Col>
                    <img src="/images/hp-icon-1.png" alt="ideas" />
                    <h3>Ideas</h3>
                    <p>Lorem Lorem</p>
                </Col>
                <Col>
                    <img src="/images/hp-icon-2.png" alt="shield" />
                    <h3>Ideas</h3>
                    <p>Lorem Lorem</p>
                </Col>
                <Col>
                    <img src="/images/hp-icon-3.png" alt="graph" />
                    <h3>Ideas</h3>
                    <p>Lorem Lorem</p>
                </Col>
            </Row>
        </Container>
        

    )
}