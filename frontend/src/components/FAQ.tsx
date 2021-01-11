import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function FAQ() {
    const ContainerStyle = {
        background: '#eeeeee'
    }

    const TextStyle = {
        textAlign: 'center' as 'center'
    }
    
    return(
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                    <h1 className='display-4' style={TextStyle}>FAQ</h1>
                </Col>
            </Row>
        </Container>
    );
}
export default FAQ