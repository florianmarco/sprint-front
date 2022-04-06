import React,{useState} from 'react';
import { Col,Row,Button,FormControl,InputGroup,Accordion} from 'react-bootstrap';
import axios from 'axios';

const AddUser = () => {

    const [lastname, setLastname] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [email, setEmail] = useState(null);
    const [role,setRole]= useState(null)


    function sendUserDetails(event){

        if(lastname!==null &&
           firstname!==null &&
           email !== null ){

  
    const userData = JSON.stringify({ lastname: lastname, firstname: firstname,email:email });
   
    
           
      axios.post(`http://localhost:8085/guest/create/employee`,{userData})
      .then(res => {
     
        

      })


           }
    



    }
    
    return (
        <>

<Row>
    <Col md={{ span: 6, offset: 3 }}>
    <Accordion defaultActiveKey="0" flush>
    <Accordion.Item eventKey="0">
        <Accordion.Header>Ajouter un utilisateur</Accordion.Header>
        <Accordion.Body>


        <>
    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Nom</InputGroup.Text>
        <FormControl
        aria-label="Nom de Famille"
        aria-describedby="basic-addon1"
        size="sm"
        onChange={e=>setLastname(e.target.value)}
        />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Prénom</InputGroup.Text>
        <FormControl
        aria-label="Nom de Famille"
        aria-describedby="basic-addon1"
        onChange={e=>setFirstname(e.target.value)}
        />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <FormControl
        aria-label="Nom de Famille"
        aria-describedby="basic-addon1"
        onChange={e=>setEmail(e.target.value)}
        />
    </InputGroup>

    </>


    <Button variant="primary" onClick={sendUserDetails}>Primary</Button>{' '}

        </Accordion.Body>
    </Accordion.Item>

    
    </Accordion>

    

    </Col>
</Row>
            
        </>
    );
};

export default AddUser;