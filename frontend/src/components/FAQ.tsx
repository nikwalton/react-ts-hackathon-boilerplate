import React from 'react'
import {Container, Row, Col, Accordion, Card, AccordionToggle, AccordionCollapse} from 'react-bootstrap'

function FAQ() {
    const ContainerStyle = {
        background: '#eeeeee'
    
    }

    const TextStyle = {
        textAlign: 'center' as 'center'
    }
    
    return(
        <>
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                    <h1 className='display-4' style={TextStyle}>FAQ</h1>
                </Col>
            </Row>
    
        </Container>
        <Container>
        <Row>
                <Col>
                <Accordion defaultActiveKey='0'>
                    <Card>
                        <AccordionToggle as={Card.Header} eventKey='0' style={TextStyle}>
                            Lorem Ipsum?
                        </AccordionToggle>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body>Answer to your wonderful question</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <AccordionToggle as={Card.Header} eventKey='1' style={TextStyle}>
                            Lorem Ipsum Loret?
                        </AccordionToggle>
                        <Accordion.Collapse eventKey='1'>
                            <Card.Body>Answer to your wonderful question</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <AccordionToggle as={Card.Header} eventKey='2' style={TextStyle}>
                            Lorem Ipsum Lorem?
                        </AccordionToggle>
                        <Accordion.Collapse eventKey='2'>
                            <Card.Body>Answer to your wonderful question</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <AccordionToggle as={Card.Header} eventKey='3' style={TextStyle}>
                            Lorem?
                        </AccordionToggle>
                        <Accordion.Collapse eventKey='3'>
                            <Card.Body>Answer to your wonderful question</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <AccordionToggle as={Card.Header} eventKey='4' style={TextStyle}>
                            Ipsum?
                        </AccordionToggle>
                        <Accordion.Collapse eventKey='4'>
                            <Card.Body>Answer to your wonderful question</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default FAQ