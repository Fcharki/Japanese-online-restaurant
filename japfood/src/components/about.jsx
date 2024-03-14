import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import '../App.css';
import food1 from "../assets/menu/about1.jpg";
import food2 from "../assets/menu/about2.jpg";

export default function About() {
    return (
        <section id="about" className='container-fluid about my-5 pt-4'>
            <Container>
                <Row>
                    <Col>
                        <p><span className='resto-name'>Tabemono</span> is a Moroccan company for Japanese food delivery, founded by F.C., passionate about Japan and Japanese culture.<br />Here I'm sharing with you the best Japanese food options you should try at least once in your lifetime!<br />I hope you enjoy the journey!</p>
                    </Col>
                </Row>
                <Row className="catalogue">
                    <Col xs={12} md={4}>
                        <img src={food1} alt="food" className='img-fluid' />
                    </Col>
                    <Col xs={12} md={4}>
                        <img src={food2} alt="food1" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
