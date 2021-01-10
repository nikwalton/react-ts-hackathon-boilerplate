import React from 'react';
import {Jumbotron, Container, Button, Row} from 'react-bootstrap';
import { textChangeRangeIsUnchanged } from 'typescript';

function Hero() {
    const JumboStyle = {
        background: "#222831"
    }
    const TextStyle = {
        color: "white"
    }
     
    return (
        <div>
            <Jumbotron fluid style={JumboStyle} className='shadow'>
                <Container style={{paddingTop: "10em", paddingBottom: "10em"}}>
                    <h1 style={TextStyle}>What The Hack? TSHack</h1>
                    <p style={TextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button variant="light">Register</Button>{' '}
                    <Button variant="light">Volunteer</Button>{' '}
                    <Button variant="light">Sponsor</Button>{' '}
                </Container>
            </Jumbotron>

        </div>
    );
}
export default Hero