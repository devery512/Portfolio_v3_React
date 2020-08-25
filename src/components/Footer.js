import React from 'react';
import Container from '@material-ui/core/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer(){

    return(
        <footer className="mt-5">
            <Container>
                <Row>
                    <Col className="border-top justify-content-between p-3">
                        Garrian Brown
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={ 3 }>
                        This site was made by Garrian Brown
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;