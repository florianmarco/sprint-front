import React from 'react';
import {Form} from 'react-bootstrap';

const EmployeesSelect = ({methodEmployees,employeeSelected}) => {

    const handleItemSelected=(e)=>{

        methodEmployees(e.target.value)
        
    }

    return (
        <>
            <Form.Select size="sm" onChange={(e)=> handleItemSelected(e)}>
            {employeeSelected.map((item) =>{
            
         
            return (<option
                    key={item.id}
                    
                    >{item.firstname} {item.name}
                 
                   </option>)
          })}
                
            </Form.Select>
            
        </>
    );
};

export default EmployeesSelect;