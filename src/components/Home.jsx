import React from 'react'
import vg from "../assets/2.png"
import samsung from "../assets/samsung.png"
import mi from "../assets/mi1.png"
import { AiFillApple, AiFillGoogleCircle } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>Gadget Doctor</h1>
                    <p>Solution to all Smartphone problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>At Gadget Doctor, we understand the value of your mobile device and the inconvenience caused by its damage. Our experts are equipped to handle a wide range of phone repair issues, including cracked screens, motherboard problems, water damage, and more.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div><h1>Who we are?</h1>
                    <p>Gadget Doctor is the largest mobile phone repairing chain in India, also the biggest electronic service provider. We are a one-stop solution for all needs related to the repair of android & IOS smartphones and Windows based laptops. The company aims to solve the problems in the repairing industry. we offers repairs and services for smartphones, mobiles, and laptops of all major brands, including Apple, iPhone, OnePlus, Redmi, Mi, Oppo, Vivo, Xiaomi, Google Pixel, Samsung and Realme phone. Phixman has more than 180 repairing stores and service work shops across India and the numbers are rapidly increasing.

                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands we repair</h1>

                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillApple />
                            <p>Apple</p>
                        </div>

                        <div style={{ animationDelay: "0.5s" }}>
                        <img src={samsung} alt="Samsung"/>
                            <p>Samsung</p>
                        </div>

                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{ animationDelay: "1s" }}>
                        <img src={mi} alt="Xiaomi"/>
                            <p>Xiaomi</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
