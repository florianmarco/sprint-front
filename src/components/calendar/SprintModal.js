import React,{useState} from 'react';
import {Modal,Button,Nav} from 'react-bootstrap';
import "./SprintModal.css"
import ModalBodyDescription from './ModalBodyDescription';
import ModalBodyFinancial from './ModalBodyFinancial';

    

const SprintModal = ({show,titleSprint,handleClose}) => {


    const [showDescription, setShowDescription] = useState(true);
    const navToDescription = () => setShowDescription(true);
    const navToFinancial = () => setShowDescription(false);


    return (
        <>
        <Modal show={show}
         onHide={handleClose} size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered>
          <Modal.Header closeButton>
            <Modal.Title><span className="title-css">Dénomination du sprint :</span>{titleSprint}</Modal.Title>
          </Modal.Header>
          <Modal.Body >

          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link onClick={navToDescription} eventKey="link-1" >Résumé Sprint</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={navToFinancial} eventKey="link-2">Report Financier</Nav.Link>
            </Nav.Item>
          </Nav>

          {showDescription ? <ModalBodyDescription/> : <ModalBodyFinancial/>}

            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Enregistrer les modifications
            </Button>
          </Modal.Footer>
      </Modal>
        </>
    );
};

export default SprintModal;