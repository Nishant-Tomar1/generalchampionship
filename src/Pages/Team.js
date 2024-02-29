import React from 'react'

function Team() {
    const team = [
        ["Rishita","VP"],
        ["Ayush","gsec"],
        ["Yuvraj","gsec"],
        ["Sambit","gsec"],
        ["Rishita","VP"],
        ["Ayush","gsec"],
        ["Yuvraj","gsec"],
        ["Sambit","gsec"]        
    ]


  return (
    
    <section className=" body-font">


    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="text-3xl md:text-5xl font-bold title-font mb-4 text-pink-700">Organizing Team</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-sm md:text-lg">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
      </div>


      <div className="flex items-center justify-center flex-wrap -m-4">

        {team.map((person) => 
            <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4" src={require("../Assets/IMAGES/GClogo.png")} />
              <div className="w-full">
                <h5 className="title-font font-medium ">{person[0]} </h5> 
                <h6 className="text-gray-500 mb-3 ">{person[1]}</h6>
              </div>
            </div>
          </div>
        )}
               
      </div>
    </div>
  </section>
    
  )
}

export default Team