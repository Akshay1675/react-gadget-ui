import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/motherboard-repair.png"
import img2 from "../assets/water-damage-repair.png"

const Services = () => {
    return (
        <div>

            <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={2000}>

                <div>
                    <img style={{ width: 500, height: 500 }} src={img1} alt="Item1" width={100}/>
                    <p className="legend">Motherboard Repair</p>
                </div>
                <div>
                    <img style={{ width: 500, height: 500 }} src={img2} alt="Item2" />
                    <p className="legend">Water Damage Repair</p>

                </div>


            </Carousel>
        </div>
    )
}

export default Services
