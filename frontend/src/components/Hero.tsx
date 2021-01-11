import React from 'react';
import {Jumbotron, Container, Button, Row} from 'react-bootstrap';
import { textChangeRangeIsUnchanged } from 'typescript';

function Hero() {
    const JumboStyle = {
        background: '#222831',
        marginBottom: '0px'
    }
    const TextStyle = {
        color: 'white'
    }
     
    return (
        <div>
            <Jumbotron fluid style={JumboStyle} className='shadow'>
                <Container style={{paddingTop: '10em', paddingBottom: '10em'}}>
                    <h1 style={TextStyle}>What The Hack? TSHack</h1>
                    <p style={TextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p style={TextStyle}>1/1/2021 - 1/2/2021 Anyplace, USA</p>
                    <Button variant='outline-light'>Register</Button>{' '}
                    <Button variant='outline-light'>Volunteer</Button>{' '}
                    <Button variant='outline-light'>Sponsor</Button>
                </Container>
            </Jumbotron>

        </div>
    );
}
export default Hero