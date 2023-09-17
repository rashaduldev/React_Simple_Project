/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Cources = () => {
    const [cources,setCources]=useState([]);
    useEffect(()=>{
        fetch('/Data.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='mx-10'>
            <h2 className='text-5xl text-center font-bold my-4'>Cource Registation</h2>
            <hr />
        </div>
    );
};

export default Cources;