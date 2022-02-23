import React from 'react';
import "./Login.css";
import { InputGroup,FormControl,
   Container,Col,Row,Button,Image } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate } from "react-router-dom";

  
const Login = () => {
let navigate = useNavigate();
function submitForm() {
 
  
  axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
     
          navigate("/calendar")

      })

}


    return (
        <>

<Container fluid className="main-component">
  <Row>
    
    <Col sm={4} >
   
      <Container className="container-login">
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <Image roundedCircle id="image-login" src="../img/logo192.png"></Image>
        <h1>Sprint</h1>
        </Col>
      </Row>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Adresse Mail"
            aria-label="Adresse Mail"
            aria-describedby="basic-addon1"
            type="mail"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Password"
            aria-label="password"
            aria-describedby="basic-addon1"
            type="password"
          />
        </InputGroup>
        <Button variant="outline-primary" onClick={submitForm}>Je me connecte</Button>{' '}
      </Container>
    </Col>
  </Row>

</Container>



</>
    );

};


export default Login;