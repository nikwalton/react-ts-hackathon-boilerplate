import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

function Sponsors() {
    const ContainerStyle = {
        background: '#ffd369'   
    }

    const TextStyle = {
        textAlign: 'center' as 'center'
    }

    return(
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                <h1 className="display-4" style={TextStyle}>Sponsors</h1>
                </Col>
            </Row>
        </Container>
    );
}
export default Sponsors