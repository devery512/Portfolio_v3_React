import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer(){

    return(
        <footer className="mt-5">
            <Container maxWidth="xl">
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Garrian Brown
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    <a href="https://github.com/devery512" target="_blank">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/garrian-brown/" target="_blank">
                        <LinkedInIcon />
                    </a>    
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;