


const HeroBanner: React.FC =() => {
    return(
        
        <div className=" p-6 sm:p-10 ">
            <div className=" flex justify-center ">
<svg width="28" height="34" viewBox="0 0 20 20" fill="none">
                  <line
                    x1="2"
                    y1="6"
                    x2="14"
                    y2="6"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  </svg>
                  <p className="text-sm font-semibold">API INTEGRATION</p>
                  <svg width="28" height="34" viewBox="0 0 20 20" fill="none">
                  <line
                    x1="2"
                    y1="6"
                    x2="14"
                    y2="6"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  </svg>
                  
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-5xl text-center font-sans">The essential Api That Help<br/> Connecting Team. </h1>
        <p className="text-gray-900 font-medium text-sm sm:text-lg text-center mt-3">
           A platform delivering ultra-fast, dynamic & personalized project experiences
           </p>
        <div className="mt-5">
        <div className="mt-5 overflow-x-auto scroll-smooth hide-scrollbar ">
        <div className="flex justify-center space-x-4 w-max lg:w-auto  ">
                            {/* first box */}

            <div className="bg-white w-[6rem] h-[5rem] rounded-2xl relative flex flex-col items-center justify-center">
  <p className="absolute top-2 right-2 rounded-full p-1.5 border border-[#e0e0e0]"></p>
  <img src="icons/icon1.png" alt="icon" className="mb-1" />
  <p className="text-xs font-light text-center">Group chat</p>
</div>

{/* second box */}
     <div className="bg-white w-[6rem] h-[5rem] rounded-2xl relative flex flex-col items-center justify-center">
  <p className="absolute top-2 right-2 rounded-full p-1.5 border border-[#e0e0e0]"></p>
  <img src="icons/icon2.png" alt="icon" className="mb-1" />
  <p className="text-xs font-light text-center">Instant mail</p>
</div>

{/* third box */}

            <div className="bg-white w-[6rem] h-[5rem] rounded-2xl relative flex flex-col items-center justify-center">
  <img src="icons/icon6.png" alt="" className="absolute top-2 right-2 " />
  <img src="icons/icon3.png" alt="icon" className="mb-1" />
  <p className="text-xs font-light text-center">file boat</p>
</div>

{/* fourth box */}

            <div className="bg-white w-[7rem] h-[5rem] rounded-2xl relative flex flex-col items-center justify-center">
  <p className="absolute top-2 right-2 rounded-full p-1.5 border border-[#e0e0e0]"></p>
  <img src="icons/icon4.png" alt="icon" className="mb-1" />
  <p className="text-xs font-light text-center">Call manage</p>
</div>

{/* fifth box */}

           <div className="bg-white w-[7rem] h-[5rem] rounded-2xl relative flex flex-col items-center justify-center">
  <p className="absolute top-2 right-2 rounded-full p-1.5 border border-[#e0e0e0]"></p>
  <img src="icons/icon5.png" alt="icon" className="mb-1" />
  <p className="text-xs font-light text-center">Teamwork</p>
</div>
   </div>
<div className="flex justify-center mt-5">
  <button className="bg-black text-white text-sm font-semibold py-3 px-6 flex items-center rounded-full">
    Get Started - it's Free
  </button>
</div>

<div className="flex justify-center mt-5 space-x-4">
    <div className="flex items-center space-x-2">
        <img src="icons/icon7.png" alt="" className="w- h-3" />
        <p className="font-sans text-sm">Free Signup</p>
    </div>

    <div className="flex items-center space-x-2">
        <img src="icons/icon7.png" alt="" className="w- h-3" />
        <p className="font-sans text-sm">No Credit Card Required</p>
    </div>

    <div className="flex items-center space-x-2">
        <img src="icons/icon7.png" alt="" className="w- h-3" />
        <p className="font-sans text-sm">Cancel Anytime</p>
    </div>
</div>
                <img src="icons/image1.png" alt="visual" className="mx-auto mt-10" />

        </div>
        </div>
        </div>
       
    )
}

export default HeroBanner;