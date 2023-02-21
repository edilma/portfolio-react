import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import portfolios from "../gridadata.json"

export default function Grids() {

    return (
        <Container>
            <Row>
                {
                    portfolios.map(
                        (item)=>{
                           return(
                <Col key={portfolios.id}sm={12} md={6}lg={4} xl={2}>
                <Card>
                <Card.Body>
                    <Card.Img src={item.image}
                    alt=""/>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>)}
                 )}
            </Row>
        </Container>


    )
}