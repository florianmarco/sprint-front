import React from 'react';
import { Modal,Button,Form,FloatingLabel,Alert } from 'react-bootstrap';
import "./CreateSprintModale.css"

const CreateSprintModale = ({onHide,show,employee}) => {
    return (
        <>

        <Modal
        size="lg"
        show={show}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header>
            <Modal.Title>Création d'un Sprint pour <span className="employee-title">{employee}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <FloatingLabel
        controlId="floatingInput"
        label="Dénomination du sprint"
        className="mb-3"
         >
         <Form.Control type="text" placeholder="name@example.com" />
     </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
            <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        
        <Alert variant="info">
            Date de départ du sprint
        </Alert>
        <Form.Group controlId="startdate">
            <Form.Control type="date" name="startdate" placeholder="Départ du sprint" />
        </Form.Group>
        <Alert variant="info">
            Date de fin du sprint
        </Alert>
        <Form.Group controlId="enddate">
            <Form.Control type="date" name="enddate" placeholder="Fin du sprint"/>
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary">
            Enregistrer le Sprint
          </Button>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            
        </>
    );
};

export default CreateSprintModale;