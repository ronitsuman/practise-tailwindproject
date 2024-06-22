import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 ">
      <div className="flex items-center justify-around ">
        <img src="./src/assets/Blue-Shape.svg" alt="1st" className="-rotate-45  h-64 md:h-80 "/>
        <img src="./src/assets/Pink-Shape.svg" alt="2nd
        " 
        className=" md:h-80 absolute -rotate-[15deg] h-64  "/>
        <img src="./src/assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[30deg] h-64 md:h-80 "  />
        <img src="./src/assets/Hero-Model.png" alt="hero" className="absolute h-64 md:h-120 "   />
        </div>
      
      <div>
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host Your Website in 5 Minutes</h1>
        <p className="font-lato text-gray-400 py-3">with Hoster Get Your Website up and running in no less than 5 minutes with the most comparative pricing range </p> 
        <form action="" className="flex flex-col gap-4">
          <input type="email" name="emailid" placeholder="Enter Your Email" id="Email" />
          <button  className="bg-amber-300 hover:bg-amber-700 ">Join the waitlist </button>
        </form>
        <div className="py-2 ">
          <img src="./src/assets/Checkmark.svg" alt="verified" />
          <p className="font-lato text-gray-400">Non Spam Unsuscribe Anytime</p>
        </div>

      </div>
    </div>
  )
}

export default Body
