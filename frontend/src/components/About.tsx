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
                    <p style={ParaStyle}>Integer sit amet condimentum tortor, quis sagittis sem. Proin id nibh congue, eleifend nisl eget, vestibulum elit. 
                    In nec velit sapien. Donec metus velit, ultrices eu metus id, dignissim pulvinar magna. Vestibulum pulvinar, nisi a facilisis porta, 
                    enim purus interdum lectus, sit amet efficitur lacus risus non mi. Maecenas vel magna eget neque faucibus commodo ut quis dolor. 
                    Suspendisse aliquam efficitur fringilla. Maecenas ac efficitur mi. Pellentesque placerat lorem cursus magna mattis consequat. 
                    Nullam sit amet magna dui. In hac habitasse platea dictumst. Nullam rutrum, metus a accumsan vehicula, tellus nunc viverra ligula,
                     ac laoreet sapien lectus eu eros. Sed in augue massa.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style={ParaStyle}>Nam aliquam justo lectus, a scelerisque lectus iaculis a. Fusce pulvinar et odio et convallis.
                     Morbi imperdiet placerat ligula. Nunc accumsan fringilla libero, sit amet gravida justo tristique eget.
                      Nulla eget lacus dapibus, rutrum est quis, sodales ligula. Aliquam sodales elit at ullamcorper finibus.
                       Aenean elementum cursus tellus. Aenean at vestibulum ante. Pellentesque ut sapien at nunc dictum imperdiet.</p>
                </Col>
                <MediaQuery minWidth={768}>
                    <Col>
                    </Col>
                </MediaQuery>
            </Row>
            <br/>
            <br/>
        </Container>
        
    );
}
export default About