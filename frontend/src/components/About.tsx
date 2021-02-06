import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import MediaQuery from 'react-responsive'
import image1 from '../images/alex-kotliarskyi-ourQHRTE2IM-unsplash.jpg'
import image2 from '../images/luca-bravo-XJXWbfSo2f0-unsplash.jpg'

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
                        Pellentesque aliquam posuere orci et porta. Fusce pretium tortor ipsum, in cursus eros vestibulum eu.
                    Etiam eu erat vel nisl sollicitudin gravida. Aliquam diam augue, eleifend in lectus sit amet, suscipit pharetra ante.
                        Pellentesque aliquam posuere orci et porta enean sit amet sapien quis elit efficitur condimentum. Suspendisse tortor quam,
                    vulputate nec turpis ac, posuere fringilla lectus. Pellentesque aliquam posuere orci et porta. Fusce pretium tortor ipsum, in cursus eros vestibulum eu.
                    Etiam eu erat vel nisl sollicitudin gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor quam, fermentum in augue vitae,
                    ullamcorper pretium ante.</p>
            
                </Col>
                <MediaQuery minWidth={768}>
                    <Col>
                    <Image src={image1} className="shadow" style={{height:300, marginLeft:200, marginBottom: 50}} rounded thumbnail />
                    </Col>
                </MediaQuery>
               
            </Row>
            
            <Row>
            <MediaQuery minWidth={768}>
                <Col>
                    <Image src={image2} className="shadow" style={{height:300,marginLeft:200 }} rounded thumbnail/>
                </Col>
            </MediaQuery>    
                <Col>
                    <p style={ParaStyle}>Integer sit amet condimentum tortor, quis sagittis sem. Proin id nibh congue, eleifend nisl eget, vestibulum elit. 
                    In nec velit sapien. Donec metus velit, ultrices eu metus id, dignissim pulvinar magna. Vestibulum pulvinar, nisi a facilisis porta, 
                    enim purus interdum lectus, sit amet efficitur lacus risus non mi. Maecenas vel magna eget neque faucibus commodo ut quis dolor. 
                    Suspendisse aliquam efficitur fringilla. Maecenas ac efficitur mi. Pellentesque placerat lorem cursus magna mattis consequat. 
                    Nullam sit amet magna dui. In hac habitasse platea dictumst. Nullam rutrum, metus a accumsan vehicula, tellus nunc viverra ligula,
                     ac laoreet sapien lectus eu eros. Sed in augue massa. Integer sit amet condimentum tortor, quis sagittis sem. Proin id nibh congue, eleifend nisl eget, vestibulum elit. 
                    In nec velit sapien. Donec metus velit, ultrices eu metus id, dignissim pulvinar magna. Vestibulum pulvinar, nisi a facilisis porta, 
                    enim purus interdum lectus, sit amet efficitur lacus risus non mi.</p>
                </Col>
            </Row>
            <br/>
            <br/>
        </Container>
        
    );
}
export default About