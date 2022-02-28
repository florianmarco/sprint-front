import React from 'react';
import {ProgressBar,Alert,Form,Row,Col,Container,Accordion} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {BsFillPersonCheckFill,BsFillCalendar2CheckFill,BsFillCalendar2XFill} from "react-icons/bs";

const ModalBodyDescription = () => {
    return (
        <>
                
            <Container className="container-details-sprint">
                <Row className="container-sprint-details" >
                    <Col md={1}>
                        <IconContext.Provider
                        
                        value={{ color: 'blue', size: '18px',padding:'0px',margin:'0px' }}
                        >
                        <BsFillPersonCheckFill className="ml"/>
                        </IconContext.Provider>
                    </Col>
                    <Col md={4} >
                    Sprint attribué à :
                    </Col>
                </Row>
                <Row>
                <Col md={1}>
                        <IconContext.Provider
                        
                        value={{ color: 'blue', size: '18px',padding:'0px',margin:'0px' }}
                        >
                        <BsFillCalendar2CheckFill className="ml"/>
                        </IconContext.Provider>
                    </Col>
                    <Col md={4} sm={6} xs={6} >
                    Date de début du sprint :
                    </Col>
                </Row>
                <Row>
                <Col md={1} >
                        <IconContext.Provider
                        
                        value={{ color: 'blue', size: '18px',padding:'0px',margin:'0px' }}
                        >
                        <BsFillCalendar2XFill className="ml"/>
                        </IconContext.Provider>
                    </Col>
                    <Col md={4} sm={6} xs={6} >
                    Date de fin du sprint :
                    </Col>
                </Row>
                <Row>
            
                    <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                        <IconContext.Provider
                        
                        value={{ color: 'blue', size: '18px',padding:'0px',margin:'0px' }}
                        >
                        <BsFillCalendar2XFill/>
                        </IconContext.Provider>
                            
                            
                            <span className="description-ml">Description (cliquez pour ouvrir)</span></Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
            <Row>
                <Alert variant="success">
                    <Alert.Heading>Hey,content de vous voir sur Sprint</Alert.Heading>
                    <p>
                       Afin de donner de la visibilité à votre responsable de pôle, ainsi qu'à la direction,
                       il vous ai demandé de tenir à jour l'avancée estimée de votre sprint.
                    </p>
                    <hr />
                    <p className="mb-0">
                        En cas de difficulté à la réalisation du sprint ou de retard estimé,
                         il est important d'en avertir en amont son responsable de pôle afin de lui permettre
                         de piloter l'activité qui vous concerne
                    </p>
                    </Alert>
                <p>Indication de complétude du sprint : <ProgressBar animated now={45} /></p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Indiquez la complétude du sprint en date</Form.Label>
                <Form.Control type="number" placeholder="en %" />
                <Form.Text className="text-muted">
                  Ceci est une estimation à titre informatif uniquement
                </Form.Text>
            </Form.Group>
            </Row>


        </>
    );
};

export default ModalBodyDescription;