import React,{ useState,useEffect} from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import {BsPlusLg} from "react-icons/bs";
import { IconContext } from 'react-icons';
import "./DashboardCalendar.css"
import PolesSelect from "./PolesSelect";
import EmployeesSelect from "./EmployeesSelect";
import CreateSprintModale from "./CreateSprintModale";
import axios from 'axios';



const DashboardCalendar = () => {

    /**
     * State : poleSelected
     * Description : tableau des pôles
     */
    const [poleSelected, setPoleSelected] = useState([]);

    /**
     * State : employeeSelected
     * Description : Tableau des employés suivant le pôle
     */
    const [employeeSelected, setEmployeeSelected] = useState([]);


    /**
     * State: employee
     * Description : L'employé sélectionné pour effectuer une action
     */
    const [employee,setEmployee] = useState();

    /**
     * Gestion modale
     */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (() => {
        
        
        setShow(true);
    })
   

    /**
     * ----------Fin gestion modale------------------
     */

    useEffect(() => {

            axios.get(`data/Pole.json`)
            .then(res => {

            setPoleSelected([...res.data.pole])
                   
        })

    },[]);

   


    useEffect(()=>{

        const arrayEmployeesFile = ['Administratif','Developpement','Direction','Marketing']

        arrayEmployeesFile.map((item)=>{

             return   axios.get(`data/${item}.json`)
              .then(res => {

                res.data[item].map((i) =>{

              return  setEmployeeSelected(employeeSelected=>[...employeeSelected,i])

                })
  
              })
        })

    },[])

  //  console.log(employeeSelected)


    /*
      Cette méthode permet un callback pour faire remonter l'information "liste des employés" du composant enfant ActionFilter
      L'objectif étant de centraliser les states dans le composant enfant

    */
     function handleEmployees (itemSelected){

        console.log(itemSelected)
        setEmployee(itemSelected)

     }

     /*
      Cette méthode permet un callback pour faire remonter l'information "liste des différents poles" du composant enfant ActionFilter
      L'objectif étant de centraliser les states dans le composant enfant

    */
     function handlePoles (itemSelected){

        

        if(itemSelected==="Ensemble des pôles"){

            const arrayEmployeesFile = ['Administratif','Developpement','Direction','Marketing']
            setEmployeeSelected([])
            arrayEmployeesFile.map((item)=>{

             return   axios.get(`data/${item}.json`)
              .then(res => {

                res.data[item].map((i) =>{

              return  setEmployeeSelected(employeeSelected=>[...employeeSelected,i])

                })
  
              })
        })
                   
        }  
        else{

            axios.get(`data/${itemSelected}.json`)
            .then(res => {
           
            setEmployeeSelected(res.data[itemSelected])
            
        })

        } 
     }

    return (
        <>
        <Container fluid className="main-container">

            <Row className="navbar-css">


            </Row>

            <Row className="middle-nav-container">



            </Row>

            <Row className="action-calendar-container">

                <Col md={2}>
                    <PolesSelect methodPoles={handlePoles} poleSelected={poleSelected} />
                </Col>
                 <Col md={2}>
                    <EmployeesSelect methodEmployees={handleEmployees} employeeSelected={employeeSelected}/>
                </Col>
                <Col md={2}>
                  <Row className="action-menu-css">
                    <IconContext.Provider
                        
                        value={{ color: 'blue', size: '15px',padding:'0px' }}
                        >
                        <div onClick={handleShow}><BsPlusLg/></div>
                        <div>
                            <span className="custom-action-title-menu">créer un sprint</span>
                        </div>
                    </IconContext.Provider>
                 </Row>
                </Col> 
            </Row>

            

        </Container>
        <CreateSprintModale show={show} employee={employee} onHide={handleClose}/>
        </>
    );
};

export default DashboardCalendar;