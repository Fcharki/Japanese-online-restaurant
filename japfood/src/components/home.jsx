import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../App.css';
import oct from '../assets/images/oct.jpg';
import ramen from '../assets/images/ramen.webp';

export default function Home() {
    return (
        <section id="home" className='container-fluid home mb-3 mt-5'>
            <Container>
                <Row className="images">
                    <Col xs={12} md={6}>
                        <img src={oct} alt="octopus" className='img-fluid' />
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={ramen} alt="ramen" className='img-fluid' />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} xl={12} className='p-3'>
                        <div>
                            <h3 className='text-dark'>Are you craving some healthy and delicious Japanese food?</h3>
                            <p className='text-dark'>Well, here you can find an extensive list of amazing Japanese food suggestions!<br />
                                <span className='h5'>いらっしゃいませ!</span></p>
                            <a href="#menu" className="btn btn-md p-3 link btn-success text-light">Start eating healthy</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
