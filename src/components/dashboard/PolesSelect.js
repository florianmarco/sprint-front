
import {Form} from 'react-bootstrap';
import React from 'react';


const PoleSelect = ({methodPoles,poleSelected}) => {

     const handleItemSelected=(e)=>{

         methodPoles(e.target.value)
         
     }

    return (

        <>
          <Form.Select size="sm" onChange={(e)=> handleItemSelected(e)} > 
          {poleSelected.map((item) =>{
            
            return (<option
                    key={item.id}
                    
                    
                    >{item.name}
                 
                   </option>)
          })}
          
          </Form.Select>
        </>
    );
};

export default PoleSelect;