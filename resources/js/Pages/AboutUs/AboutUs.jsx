import React from 'react'
import './../Style/Style.css'
import Navbar from './../Navbar/Navbar';
import image from './../Images/for.jpg'
function AboutUs() {
    return (
        <>
            <Navbar />
            <div className='about bg-dark w-100  text-center  text-white' >
                <h1 className='text-center fs-4 mb-2'>About Us</h1>
                <p>
                    ZLorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus voluptatibus vel neque reiciendis laborum veniam quidem at quae! Rem impedit unde possimus? Dolorum minima id, animi non dignissimos est.
                </p>
            </div>
            <div className='container'>

                <div className="row justify-content-center">
                    <div className="col-8 col-ofse">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={image} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default AboutUs
