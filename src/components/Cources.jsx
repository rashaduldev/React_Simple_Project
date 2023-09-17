/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Courc from './Courc';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [clickTitle, setClickTitle] = useState([]);

  useEffect(() => {
    fetch('/Data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const oldData=clickTitle.title
  const handleClicked = (course) => {
    
    setClickTitle([course]);
  };

  return (
    <div className='mx-10'>
      <h2 className='text-5xl text-center font-bold my-4'>Course Registration</h2>
      <hr />
      <div className='flex flex-col lg:flex-row'>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 w-9/12 gap-5'>
          {courses.map((course, index) => (
            <div key={index} className="card card-compact bg-base-100 shadow-2xl p-4 rounded">
              <figure><img className='w-full' src={course.img} alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title">{course.title}</h2>
                <p className='my-5'>{course.description}</p>
                <div className="card-actions justify-end">
                  <button onClick={() => handleClicked(course)} className="btn btn-primary bg-blue-700 text-white w-full py-3 rounded text-xl font-bold">Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-3/12 shadow-2xl'>
          <Courc clickTitle={clickTitle} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
