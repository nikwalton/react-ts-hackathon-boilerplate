import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MediaQuery from 'react-responsive'

function About() {

    const ContainerStyle = {
        background: '#393e46'
    }

    const HeaderStyle = {
        color: 'white',
        textAlign: 'center' as 'center'
    }

    const ParaStyle = {
        color: 'white'
    }


    return (
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                    <h1 className='display-4' style={HeaderStyle}>About</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style={ParaStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor quam, fermentum in augue vitae,
                    ullamcorper pretium ante. Aenean sit amet sapien quis elit efficitur condimentum. Suspendisse tortor quam,
                    vulputate nec turpis ac, posuere fringilla lectus. Fusce pretium tortor ipsum, in cursus eros vestibulum eu.
                    Etiam eu erat vel nisl sollicitudin gravida. Aliquam diam augue, eleifend in lectus sit amet, suscipit pharetra ante.
                        Pellentesque aliquam posuere orci et porta.</p>
                </Col>
                <MediaQuery minWidth={768}>
                    <Col>
                        
                    </Col>
                </MediaQuery>
            </Row>
            <Row>
            <MediaQuery minWidth={768}>
                <Col>
                    
                </Col>
            </MediaQuery>    
                <Col>
                    <p style={ParaStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor quam, fermentum in augue vitae,
                    ullamcorper pretium ante. Aenean sit amet sapien quis elit efficitur condimentum. Suspendisse tortor quam,
                    vulputate nec turpis ac, posuere fringilla lectus. Fusce pretium tortor ipsum, in cursus eros vestibulum eu.
                    Etiam eu erat vel nisl sollicitudin gravida. Aliquam diam augue, eleifend in lectus sit amet, suscipit pharetra ante.
                        Pellentesque aliquam posuere orci et porta.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style={ParaStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor quam, fermentum in augue vitae,
                    ullamcorper pretium ante. Aenean sit amet sapien quis elit efficitur condimentum. Suspendisse tortor quam,
                    vulputate nec turpis ac, posuere fringilla lectus. Fusce pretium tortor ipsum, in cursus eros vestibulum eu.
                    Etiam eu erat vel nisl sollicitudin gravida. Aliquam diam augue, eleifend in lectus sit amet, suscipit pharetra ante.
                        Pellentesque aliquam posuere orci et porta.</p>
                </Col>
                <MediaQuery minWidth={768}>
                    <Col>
                    </Col>
                </MediaQuery>
            </Row>

        </Container>
    );
}
export default About