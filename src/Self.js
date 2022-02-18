import React from 'react';
import './Self.css';
import { Button,Form } from 'react-bootstrap';

const Self = () => {
  return (
    <div>
        <div id='nav'>  
        <span id='spa'>sant singhaji institute of science and managment</span>
        <span id='app'> self applied student</span>
        </div> 
        <div>  

        <h5> personal details</h5>  
        <hr></hr>
        <div> 
     
<section> 
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>First Name *</Form.Label>
    <Form.Control type="email" placeholder="First Name" /> 
  </Form.Group>
</Form>

   </div>
<div>   
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Lastt Name *</Form.Label>
    <Form.Control type="email" placeholder="Last Name" /> 
  </Form.Group>
</Form>

   </div>
<div>    

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>DOB*</Form.Label>
    <Form.Control type="email" placeholder= " mm/dd/yy" /> 
  </Form.Group>
</Form>

   </div>
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Contact Number *</Form.Label>
    <Form.Control type="email" placeholder="Contact Number" /> 
  </Form.Group>
</Form>


 </div>
</section>
 {/* second form s  */} 
      
<section> 
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Father Name *</Form.Label>
    <Form.Control type="email" placeholder="First Name" /> 
  </Form.Group>
</Form>

   </div>
<div>   
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Father Occupation *</Form.Label>
    <Form.Control type="email" placeholder="Father occupation" /> 
  </Form.Group>
</Form>

   </div>
<div>    

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Father Annual Income*</Form.Label>
    <Form.Control type="email" placeholder= "Father Annual Income" /> 
  </Form.Group>
</Form>

   </div>
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}> Father Contact  *</Form.Label>
    <Form.Control type="email" placeholder=" Father Contact" /> 
  </Form.Group>
</Form>


 </div>
</section> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Address *</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  </Form>  
  <section> 
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Pincode *</Form.Label>
    <Form.Control type="email" placeholder="Pincode" /> 
  </Form.Group>
</Form>

   </div>
<div>   
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Village *</Form.Label>
    <Form.Control type="email" placeholder="village" /> 
  </Form.Group>
</Form>

   </div>
<div>    

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Tehsil*</Form.Label>
    <Form.Control type="email" placeholder= " Tehsil" /> 
  </Form.Group>
</Form>

   </div>
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>District*</Form.Label>
    <Form.Control type="email" placeholder="District" /> 
  </Form.Group>
</Form>


 </div>
</section>
 <section> 
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Email *</Form.Label>
    <Form.Control type="email" placeholder="Email" /> 
  </Form.Group>
</Form>

   </div>
<div>   
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Aadhar Number *</Form.Label>
    <Form.Control type="email" placeholder="Aadhar Number" /> 
  </Form.Group>
</Form>

   </div>
<div >    

<Form>
  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>Category*</Form.Label>
    <Form.Control type="email" placeholder= " Category" /> 
  </Form.Group> */} 
  <Form.Select  style={{width:"600px"}} aria-label="Default select example">
  <option>Category</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
</Form>

   </div>
<div> 
<Form>
<Form.Group className="mb-3" controlId="formBasicCheckbox"> 
<Form.Label>Gender</Form.Label><br></br>
    <Form.Check  style={{display: "inline"}} type="checkbox" label="Male" /> 
    <Form.Check  style={{display: "inline"}} type="checkbox" label="FeMale" /> 
  </Form.Group>
</Form>


 </div>
</section>

<div> <h3> Acadmic Details</h3></div>   
<hr style={{color:"orange" ,fontWeight:"bold"}}></hr>
<div>  
     
<section> 
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>10 th Roll Number *</Form.Label>
    <Form.Control type="email" placeholder=" 10 th Roll Number" /> 
  </Form.Group>
</Form>

   </div>
<div>   
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>10 th Percentage*</Form.Label>
    <Form.Control type="email" placeholder="10 th percentage" /> 
  </Form.Group>
</Form>

   </div>
<div>    

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>12 th Subject*</Form.Label>
    <Form.Control type="email" placeholder= "12 th subject" /> 
  </Form.Group>
</Form>

   </div>
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}> 12 th school Name  *</Form.Label>
    <Form.Control type="email" placeholder=" 12 th School Name" /> 
  </Form.Group>
</Form>


 </div>
</section> 
<section> 
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>12 th Roll Number *</Form.Label>
    <Form.Control type="email" placeholder=" 12 th Roll Number" /> 
  </Form.Group>
</Form>

   </div>
<div>   
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}>12 th Percentage*</Form.Label>
    <Form.Control type="email" placeholder="12 th percentage" /> 
  </Form.Group>
</Form>

   </div>
<div>    

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}> Branch Name*</Form.Label>
    <Form.Control type="email" placeholder= "Branch Name" /> 
  </Form.Group>
</Form>

   </div>
<div> 
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{width: "600px"}}> Course Fees  *</Form.Label>
    <Form.Control type="email" placeholder=" Course Fees" /> 
  </Form.Group>
</Form>


 </div>
</section> 

</div>
        </div>
        </div>
    </div>
  )
}

export default Self
