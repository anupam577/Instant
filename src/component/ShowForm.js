import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
const ProductList = () => {

    const {account,setAccount} =useContext(DataContext)

   
    const deleteProduct = async (id) => {
        setAccount((account) =>
        account.filter((item) => item.email !== id)
      );
    }

    return (

        <div className="product-list">

            <h1 > User List</h1>
           
            <ul className='xor'>
                <li>S. No</li>
                <li>Name</li>
                <li>Email</li>
                <li>Password</li>
                <li>Address</li>
                <li>Date of Birth</li>

            </ul>

            {
               account.length>0? account.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.email}</li>
                        <li>{item.password}</li>
                        <li>{item.address}</li>
                        <li>{item.Dob}</li>
                        <li><button onClick={() => deleteProduct(item.email)}>Delete</button>
                            <Link to={`/update/${item.email}`}>Edit</Link>
                        </li>
                    </ul>

                )
                : <h1>Product Not Found</h1>
            }



        </div>

    )
}
export default ProductList