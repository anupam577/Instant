import React, { useContext, useState } from 'react'
import "./form.css"
import { useNavigate } from 'react-router'
import { DataContext } from '../context/DataProvider'
const FormInitialvalues = {
    
  name:"",
  email:"",
  password:"",
  address:"",
  mobile_no:"",
  Dob:""
}



const FillForm = () => {
   
   const navigate=useNavigate();
   const [id,setid]=useState(0);
    const [FormDetails, setFormDetails] = useState(FormInitialvalues)
    const { account,setAccount }= useContext(DataContext);
    const onInputChange = (e) => {
        setFormDetails({ ...FormDetails, [e.target.name]: e.target.value });
        // console.log(FormDetails)
    } 

    const handleform =()=>{
 
        // setFormDetails({...FormDetails,[id]:id});
        let id=FormDetails.email
        // console.log(id)
        var bird = account.filter(item => item.email === id);
        // console.log(bird)
        if(bird.length==0){
         setAccount(account=>[...account,FormDetails]);
        

        //  console.log(account)
            navigate('/showform')}
            else{
                alert('Email Already Exist')
            }
    }


    return (
        <div className='form'>
            <h1 >Register</h1>
            <input className="inputBox" type="text" onChange={(e) => onInputChange(e)} name="name" placeholder='Enter Name' />
            
            <input className="inputBox" type="text" onChange={(e) => onInputChange(e)} name="email" placeholder='Enter Email' />
            <input className="inputBox" type="text" onChange={(e) => onInputChange(e)} name="password" placeholder='Enter Password' />
            <input className="inputBox" type="text" onChange={(e) => onInputChange(e)} name="address" placeholder='Enter Address' />
            <input className="inputBox" type="text" onChange={(e) => onInputChange(e)} name="mobile_no" placeholder='Enter Mobile No' />
            <input className="inputBox" type="text" onChange={(e) => onInputChange(e)} name="Dob" placeholder='Enter Date of Birth' />
           
            <div>
                <button className="appButton" onClick={handleform} type='button'>Submit</button>
            </div>

        </div>
    )
}

export default FillForm
