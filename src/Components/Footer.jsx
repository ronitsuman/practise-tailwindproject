import React from "react";

const Footer = () => {
  return (
    <div className="flex  flex-col  gap-12 md:flex-row md:justify-between lg:px-16 lg:py-10">
      <div>
      <ul className="flex gap-5 font-lato text-gray-400  ">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Youtube</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
      </div>
      <div className=" flex gap-2">
        <img src="./src/assets/Help-Avatar.svg" alt="help" className="h-12"/>
        <div className="gap-2"> 
        <p className="font-extralight font-light "> Have Any Question ? </p>
        <a href="#" className="font-bold font-medium ">Talk To Our Specialist</a>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
