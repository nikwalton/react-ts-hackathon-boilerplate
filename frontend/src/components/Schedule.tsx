import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'

function Schedule() {
    const ContainerStyle = {
        background: '#393e46'
    }
    
    const TextStyle = {
        color: 'white',
        textAlign: 'center' as 'center'
    }

    return (
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                <h1 className='display-4' style={TextStyle}>Schedule</h1>
                </Col>
            </Row>
        </Container>
    );
}
export default Schedule