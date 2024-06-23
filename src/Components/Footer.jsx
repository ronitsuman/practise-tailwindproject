import React from "react";

const Footer = () => {
  return (
    <div className="flex  flex-col  gap-12">
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
        <div className=""> 
        <p className="font-extralight "> Have Any Question ? </p>
        <a href="#" className=" ">Talk To Our Specialist</a>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
