/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Courc = ({clickTitle}) => {
    console.log(clickTitle);

    if (!Array.isArray(clickTitle)) {
        // Handle the case when clickTitle is not an array.
        return null; // Or render an appropriate error message.
      }
    
    // const {title}=clickTitle;
    return (
        <div className='p-8 bg-slate-100 shadow-2xl rounded-lg mx-5'>
        <h3 className='text-[#2F80ED] text-xl mb-3'>Credit Hour Remaining :hr</h3>
         <hr />
        
        <h3 className='text-4xl font-bold my-4'>Cource Name</h3>
      <div className='text-[#1c1b1b99] text-lg font-normal	mb-4'>
      {
        clickTitle.map((course,index)=>(
          
            <ul key={index}>
            <li>{`${index + 1}. ${course}`}</li>
          </ul>
        
        ))
       }
      </div>
   <hr />
   <h2 className='my-5 text-lg'>Total Credit Hour : </h2>
   <hr />
   <h2 className='text-xl'>Total Prices: USD</h2>
       
    </div>
    );
};

export default Courc;