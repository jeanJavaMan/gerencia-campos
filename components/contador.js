import { useState } from "react";
import { Button, Container, Row,Col } from 'react-bootstrap';


export default function Contador() {
    const [contador, setContador] = useState(0);

    function aumentaContador() {
        setContador(contador + 1);
    }
    return (
        <Container>
            <Row>
                <Col><p>{contador}</p></Col>
            </Row>
            <Row>
                <Col><Button onClick={aumentaContador} variant="primary">Add</Button></Col>
            </Row>
        </Container>
    );
}
