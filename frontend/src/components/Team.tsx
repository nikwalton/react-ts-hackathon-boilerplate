import React from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap'
import placeholder from '../images/avatar-placeholder.png'

function Team() {
    const ContainerStyle = {
        background: '#eeeeee'
    }

    const TextStyle = {
        textAlign: 'center' as 'center'
    }

    return (
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                    <h1 className='display-4' style={TextStyle}>Team</h1>
                </Col>
            </Row>

            <Row className=' justify-content-md-center'>
                <Image src={placeholder} style={{ height: "170px" }} className='m-auto p-3' roundedCircle />
                <Image src={placeholder} style={{ height: "170px" }} className='m-auto p-3' roundedCircle />
                <Image src={placeholder} style={{ height: "170px" }} className='m-auto p-3' roundedCircle />
                <Image src={placeholder} style={{ height: "170px" }} className='m-auto p-3' roundedCircle />
                <Image src={placeholder} style={{ height: "170px" }} className='m-auto p-3' roundedCircle />
                <Image src={placeholder} style={{ height: "170px" }} className='m-auto p-3' roundedCircle />
            </Row>
        </Container>
    );
}
export default Team