import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function About() {

    const ContainerStyle = {
        background : '#393e46'
    }

    const TextStyle = {
        color: 'white',
        textAlign: 'center' as 'center'
    }
    
    return (
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                <h1 className='display-4' style={TextStyle}>About</h1>
                </Col>
            </Row>
        
        </Container>
    );
}
export default About