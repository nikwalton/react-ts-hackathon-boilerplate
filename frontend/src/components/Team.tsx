import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

function Team() {
    const ContainerStyle = {
        background: '#eeeeee'
    }

    const TextStyle = {
        textAlign: 'center' as 'center'
    }

    return (
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                    <h1 className='display-4' style={TextStyle}>Team</h1>
                </Col>
            </Row>
        </Container>
    );
}
export default Team