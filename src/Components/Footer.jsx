import React from "react";

const Footer = () => {
  return (
    <div className="flex  flex-col  gap-1">
      <div>
      <ul className="flex fel-col gap-6 font-extralight text-gray-400  text-center ">
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
      <div className=" flex hue-rotate-30 space-x-2">
        <img src="./src/assets/Help-Avatar.svg" alt="" className="h-12"/>
        <p className="font-extralight text-left"> Have Any Question ? </p>
        <a href="#" className="text-a ">Talk To Our Specialist</a>
      </div>
    </div>
    
  );
};

export default Footer;
