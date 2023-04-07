import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {

   
    return (
        <div>
           
            <ul className='nav-ul'>
                <li> <Link to="/showform">All users</Link></li>
                <li> <Link to="/registration">Register </Link></li>
               
               
            </ul>
            
        </div>
    )
}

export default Nav;