

import { useState } from "react";
import logo from "../assets/images/logo.png"

export default function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    return(
        <nav className="container mx-auto my-3 flex justify-center" >
            <div className="container flex flex-row justify-between items-center relative sm:px-2 small:px-2" >
                <img src={logo} alt="logo du site" />
                <div className="lg:block sm:hidden small:hidden" >
                    <ul className="lg:flex flex-row justify-center items-center gap-10">
                        <li className="px-2 py-1 " >About us</li>
                        <li className="px-2 py-1 ">Services</li>
                        <li className="px-2 py-1 ">Use Cases </li>
                        <li className="px-2 py-1 ">Pricing </li>
                        <li className="px-2 py-1 ">Blog</li>
                        <li className="px-5 py-3 border rounded-lg border-black ">Request a quote</li>
                    </ul>
                </div>
                <div className={`${isMenuOpen ? "block" : "hidden"} bg-white w-full absolute top-16 shadow-lg p-7 border-t-2 border-black rounded-t-lg duration-500 ease-in-out transform` } >
                    <ul className="lg:flex flex-col justify-center items-center gap-16">
                        <li className="px-2 py-1 " >About us</li>
                        <li className="px-2 py-1 ">Services</li>
                        <li className="px-2 py-1 ">Use Cases </li>
                        <li className="px-2 py-1 ">Pricing </li>
                        <li className="px-2 py-1 ">Blog</li>
                        <li className="px-5 py-3 border rounded-lg border-black ">Request a quote</li>
                    </ul>
                </div>
                <i onClick={openMenu} className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} hidden sm:block small:block lg:hidden`}></i>
            </div>
        </nav>
    )
}