import React, { useContext, useState ,useEffect} from 'react'
import "./form.css"
import { useNavigate ,useParams  } from 'react-router'
import { DataContext } from '../context/DataProvider'






const FillForm = () => {
   
   const navigate=useNavigate();
   const params = useParams();
   

    const { account,setAccount }= useContext(DataContext);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [mobile_no, setMobile_no] = React.useState('');
    const [Dob, setDob] = React.useState('');

   

    const handleform =()=>{
 
       
            let details={
                name,
                email,
                password,
                address,
                mobile_no,
                Dob   }
            
      
         setAccount(account=>[...account,details]);
         

      
            navigate('/showform')
    }

    useEffect(() => {
       getdetails();
    }, [])
    
    const getdetails=()=>{
        let id=params.id;
        // console.log(id)

        var bird = account.filter(item => item.email === id);
       
        console.log(bird[0].name)
    
        setName(bird[0].name);
        setEmail(bird[0].email)
        setPassword(bird[0].password);
        setAddress(bird[0].address);
        setMobile_no(bird[0].mobile_no);
        setDob(bird[0].Dob);
        setAccount((account) =>
        account.filter((item) => item.email !== id)
      );
    
    }
    

    return (
        <div className='form'>
            <h1 >Edit</h1>
            <input className="inputBox" type="text"  value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder='Enter Name' />
            
            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Enter Email' />
            <input className="inputBox" type="text" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Enter Password' />
            <input className="inputBox" type="text"  value={address} onChange={(e) =>setAddress(e.target.value)} name="address" placeholder='Enter Address' />
            <input className="inputBox" type="text" value={mobile_no} onChange={(e) => setMobile_no(e.target.value)} name="mobile_no" placeholder='Enter Mobile No' />
            <input className="inputBox" type="text" value={Dob} onChange={(e) => setDob(e.target.value)} name="Dob" placeholder='Enter Date of Birth' />
           
            <div>
                <button className="appButton" onClick={handleform} type='button'>Update</button>
            </div>

        </div>
    )
}

export default FillForm
