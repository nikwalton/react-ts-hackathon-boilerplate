import React from 'react'
import {Container, Col, Row, Table, Tab} from 'react-bootstrap'

function Schedule() {
    const ContainerStyle = {
        background: '#393e46'
    }
    
    const TextStyle = {
        color: 'white',
        textAlign: 'center' as 'center'
    }

    return (
        <Container fluid style={ContainerStyle}>
            <Row>
                <Col>
                <h1 className='display-4' style={TextStyle}>Schedule</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 style={TextStyle}>1/1/2021</h1>
                    <Table striped bordered hover size='sm' style={{backgroundColor: 'white'}} className='shadow'>
                        <thead>
                            <th>Time</th>
                            <th>Activity</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8:00AM</td>
                                <td>Check-In</td>
                            </tr>
                            <tr>
                                <td>8:30AM</td>
                                <td>Breakfast</td>
                            </tr>
                            <tr>
                                <td>9:00AM</td>
                                <td>Opening Ceremony</td>
                            </tr>
                            <tr>
                                <td>10:00AM</td>
                                <td>Hacking Begins</td>
                            </tr>
                            <tr>
                                <td>11:00AM</td>
                                <td>Tech Talk</td>
                            </tr>
                            <tr>
                                <td>12:00PM</td>
                                <td>Lunch</td>
                            </tr>
                            <tr>
                                <td>12:00PM</td>
                                <td>Industry Networking</td>
                            </tr>
                            <tr>
                                <td>1:00PM</td>
                                <td>Career Advice</td>
                            </tr>
                            <tr>
                                <td>4:00PM</td>
                                <td>React Walkthrough</td>
                            </tr>
                            <tr>
                                <td>6:00PM</td>
                                <td>Dinner</td>
                            </tr>
                            <tr>
                                <td>8:00PM</td>
                                <td>Pet Your Stress Away</td>
                            </tr>
                            <tr>
                                <td>10:00PM</td>
                                <td>Late Night Snacks</td>
                            </tr>
                            <tr>
                                <td>11:59PM</td>
                                <td>Project Submissons Open</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h1 style={TextStyle}>1/2/2021</h1>
                    <Table striped hover bordered size='sm' style={{backgroundColor: 'white'}} >
                        <thead>
                         <th>Time</th>
                         <th>Activity</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12:00 AM</td>
                                <td>Submissions Open</td>
                            </tr>
                            <tr>
                                <td>1:00AM</td>
                                <td>Early Morning Snacks</td>
                            </tr>
                            <tr>
                                <td>2:00AM</td>
                                <td>Keep Hacking</td>
                            </tr>
                            <tr>
                                <td>3:00AM</td>
                                <td>Keep Hacking</td>
                            </tr>
                            <tr>
                                <td>4:00AM</td>
                                <td>Keep Hacking</td>
                            </tr>
                            <tr>
                                <td>5:00AM</td>
                                <td>Early Morning Coffee</td>
                            </tr>
                            <tr>
                                <td>6:00AM</td>
                                <td>Morning Yoga</td>
                            </tr>
                            <tr>
                                <td>7:00AM</td>
                                <td>Breakfast</td>
                            </tr>
                            <tr>
                                <td>8:00AM</td>
                                <td>Keep Hacking</td>
                            </tr>
                            <tr>
                                <td>9:00AM</td>
                                <td>Submissions Due In One Hour</td>
                            </tr>
                            <tr>
                                <td>10:00AM</td>
                                <td>Submissions Closed</td>
                            </tr>
                           <tr>
                               <td>10:01AM</td>
                               <td>Judging Begins</td>
                           </tr> 
                           <tr>
                               <td>12:00PM</td>
                               <td>Closing Ceremonies And Goodbyes</td>
                           </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
export default Schedule