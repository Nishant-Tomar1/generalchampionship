import React from 'react'
import cse from "../Assets/Flags/cse.jpg"
import civil from "../Assets/Flags/civil.jpg"
import ec from "../Assets/Flags/ecemeta.jpg"
import ee from "../Assets/Flags/electrical.jpg"
import me from "../Assets/Flags/mech.jpg"
import mt from "../Assets/Flags/mtech.jpg"
import msc from "../Assets/Flags/msc.jpg"
import phd from "../Assets/Flags/phd.jpg"


function Carousel() {

  return (
    <>
    <div className='flex items-center justify-center shadow-2xl'>
    <div className='flex flex-col items-center justify-center rounded w-5/6 md:w-2/3 mb-10'>
        <h1>--- Teams ---</h1>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>


  <div className="carousel-inner rounded-xl lg:rounded-3xl">
    <div className="carousel-item active  " data-bs-interval="3000">
      <img src={cse} style={{"opacity":"0.8"}} className="d-block w-100" alt="..." />
    </div>   

    <div className="carousel-item " data-bs-interval="3000">
      <img src={ec} style={{"opacity":"0.8"}} className="d-block w-100" alt="..." />
    </div>   
    
    <div className="carousel-item  " data-bs-interval="3000">
      <img src={ee} style={{"opacity":"0.8"}} className="d-block w-100" alt="..." />
    </div>   
 
    <div className="carousel-item " data-bs-interval="3000">
      <img src={me} style={{"opacity":"0.8"}} className="d-block w-100" alt="..." />
    </div>   
 
    <div className="carousel-item " data-bs-interval="3000">
      <img src={civil} style={{"opacity":"0.8"}} className="d-block w-100" alt="..." />
    </div>   

    <div className="carousel-item  " data-bs-interval="3000">
      <img src={mt} style={{"opacity":"0.8"}} className="d-block w-100" alt="..." />
    </div>   
  
    <div className="carousel-item  " data-bs-interval="3000">
      <img src={msc} style={{"opacity":"0.8"}} className="d-block w-100" alt="..." />
    </div>   

    <div className="carousel-item  " data-bs-interval="3000">
      <img src={phd} style={{"opacity":"0.8"}} className="d-block w-100" alt="..." />
    </div>   
  </div>
 

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
    </>
  )
}

export default Carousel
