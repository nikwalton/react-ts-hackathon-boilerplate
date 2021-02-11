import React from 'react'
import {Container, Col, Row, Card, CardDeck, Button} from 'react-bootstrap'
import placeholder from '../images/avatar-placeholder.png'

function Presenters() {
    const ContainerStyle = {
        background: '#ffd369'
    }

    const TextStyle = {
        textAlign: 'center'as 'center'
    }
    
    return(
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                    <h1 className='display-4' style={TextStyle}>Presenters</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardDeck >
                        <Card style={{width: '18rem'}} className='shadow'>
                            <Card.Img variant='top' src={placeholder} style={{height: '200px', width: "200px", alignSelf: 'center'}}/>
                            <Card.Body>
                                <Card.Title>Big CEO</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                                <Button variant="primary">Big CEO</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '18rem'}} className='shadow'>
                        <Card.Img variant='top' src={placeholder} style={{height: '200px', width: "200px", alignSelf: 'center'}}/>
                            <Card.Body>
                                <Card.Title>Professor X</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                                <Button variant="primary">Professor X</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '18rem'}} className='shadow'>
                        <Card.Img variant='top' src={placeholder} style={{height: '200px', width: "200px", alignSelf: 'center'}}/>
                            <Card.Body>
                                <Card.Title>Dr. Strange</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                                <Button variant="primary">Dr. Strange</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '18rem'}} className='shadow'>
                        <Card.Img variant='top' src={placeholder} style={{height: '200px', width: "200px", alignSelf: 'center'}}/>
                            <Card.Body>
                                <Card.Title>Some Guy</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                                <Button variant="primary">Some Guy</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
            <br/>
        </Container>
    );
}
export default Presenters