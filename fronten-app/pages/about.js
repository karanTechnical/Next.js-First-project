import React from 'react';
import Navbar from '../component/Navbar';
import Image from "next/image";

const About = () => {
  return (
    <>
    <Navbar/>
    <div style={{textAlign:"center"}}>
     <h1 style={{color:"blue"}}>This is About page</h1> 
     <Image src="/image1.jpeg" width="500" height="300"/> 

     </div>

    </>
  );
}

export default About;
