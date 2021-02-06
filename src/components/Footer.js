import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Grid, makeStyles } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles({
    link: {
        paddingLeft: '2px',
        paddingRight: '2px',
    }
  });

function Footer(){

    const classes = useStyles();

    return(
        <footer className="mt-5">
            <Container maxWidth="xl">
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" xs={6} md={3} sm={6}>
                        Garrian Brown
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" xs={6} md={3} sm={6}>
                    <a className={ classes.link } href="https://github.com/devery512" target="_blank"><GitHubIcon /></a>
                    <a className={ classes.link } href="https://www.linkedin.com/in/garrian-brown/" target="_blank"><LinkedInIcon /></a>  
                    <a className={ classes.link } href="https://twitter.com/deveryxcv" target="_blank"><TwitterIcon /></a>
                    <a className={ classes.link } href="https://www.instagram.com/deveryxcv/" target="_blank"><InstagramIcon /></a>  
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;