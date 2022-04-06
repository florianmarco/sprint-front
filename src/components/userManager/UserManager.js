import React from 'react';
import { Container,Row,Col, Button} from 'react-bootstrap';
import {BsFillBackspaceFill} from "react-icons/bs";
import { IconContext } from 'react-icons';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import "./UserManager.css"
import AddUser  from "../userManager/AddUser"

const UserManager = () => {

    let navigate = useNavigate();

    function backToCalendar(){


        navigate("/calendar")
  
       }
    return (
        <>
            
            <Row >
              

              <IconContext.Provider
                          
                          value={{ color: 'orange', size: '30px',padding:'0px' }}
                          >
                          
                          <div
                           id="backTocalendar-row" onClick={backToCalendar}>
                               <BsFillBackspaceFill/>
                           </div>
                          
      
                      </IconContext.Provider>
  
              </Row>
             
             
                <AddUser></AddUser>



















            


        </>
    );
};

export default UserManager;