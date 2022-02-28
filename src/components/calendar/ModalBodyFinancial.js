import React from 'react';
import {Row,Col,Container,Alert,Form,Table,Button} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {BsSave} from "react-icons/bs";
import "./ModalBodyFinancial.css";

const ModalBodyFinancial = () => {
    return (
        <>
            <Container className="container-details-sprint">
                <Alert variant="success">
                    <Alert.Heading>Maitrise et Analyse des couts</Alert.Heading>
                    <p>
                       Cette partie est dédiée aux responsables de pôles. Elle permet d'imputer un cout au sprint dédié.
                       L'estimation du cout doit être affiné au fur et à mesure de l'évolution du sprint jusqu'à sa finalisation.
                    </p>
                </Alert>
                <Row >
                <Alert variant="info">
                    <Alert.Heading>Cout salarial</Alert.Heading>
                    <p>
                       Vous n'avez pas la main sur cette action, lors d'une modulation salariale d'un collaborateur, vous devez en avertir le directeur technique pour modification en amont.
                        
                    </p>
                </Alert>

                    <Col md={4} >
                        <p>Cout salarial estimé :</p>
                    </Col>
                </Row>
                <Row>
                    <p>Bonus</p>
                    <Col md={8}>
                    
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    
                    <Form.Text id="passwordHelpBlock" muted>
                        Cette option vous permet d'ajouter un cout relatif à l'achèvement d'un sprint dans les temps ou pour récompenser un collaborateur.
                    
                    </Form.Text>
                    </Col>
                    <Col md={4}>

                    <IconContext.Provider
                        
                        value={{ color: 'blue', size: '18px',padding:'0px',margin:'0px' }}
                        >
                        <BsSave/>
                    </IconContext.Provider>
                    
                    </Col>
                </Row>
               
                    <Container id="container-service">
                    

                    <Alert variant="info">
                    <Alert.Heading>Couts des services externes</Alert.Heading>
                    <p>
                       Ajoutez un cout lié à un service externe comme par exemple une contractualisation avec un prestataire externe.
                        
                    </p>
                </Alert>
                <hr/>
                
                    <p>Dénomination</p>
                    <Col md={8}>
                    
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    </Col>
                    <Row>
                     <Col md={4}>
                     <p>Quantité</p>
                    <Form.Control
                        type="number"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    
                   
                     </Col>
                     <Col md={4}>
                     <p>Cout Unitaire</p>
                    <Form.Control
                        type="number"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    
                     </Col>
                     <Col md={4}>
                     <p>Cout Total</p>
                    <Form.Control
                        type="number"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    
                     </Col>
                   
                    </Row>
                  
                    <Button id="button-css" variant="primary">Enregistrer</Button>{' '}

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>Dénomination</th>
                            <th>Qt</th>
                            <th>couts</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        </Table>
                    </Container>

                    <Container id="container-service">
                    

                    <Alert variant="info">
                    <Alert.Heading>Couts des produits externes</Alert.Heading>
                    <p>
                       Ajoutez un cout lié à l'achat d'un produit .
                        
                    </p>
                </Alert>
                <hr/>
                
                    <p>Dénomination</p>
                    <Col md={8}>
                    
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    </Col>
                    <Row>
                     <Col md={4}>
                     <p>Quantité</p>
                    <Form.Control
                        type="number"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    
                   
                     </Col>
                     <Col md={4}>
                     <p>Cout Unitaire</p>
                    <Form.Control
                        type="number"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    
                     </Col>
                     <Col md={4}>
                     <p>Cout Total</p>
                    <Form.Control
                        type="number"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    
                     </Col>
                   
                    </Row>
                  
                    <Button id="button-css" variant="primary">Enregistrer</Button>{' '}

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>Dénomination</th>
                            <th>Qt</th>
                            <th>couts</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        </Table>
                    </Container>
                
                </Container>
        </>
    );
};

export default ModalBodyFinancial;