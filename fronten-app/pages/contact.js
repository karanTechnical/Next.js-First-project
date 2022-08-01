import React from 'react';
import Navbar from '../component/Navbar';
import Image from "next/image";

const contact = () => {
  return (
    <>
    <Navbar/>
    <div style={{textAlign:"center"}}>
      <h1 style={{color: "green"}}>This is Contact Page</h1>
      <Image src="https://images.pexels.com/photos/1673978/pexels-photo-1673978.jpeg?auto=compress&cs=tinysrgb&w=600" 
        width="500" height="300" alt='/'
      />
      </div>
    </>
  );
}

export default contact;
