

import logo from "../assets/images/logo.png"

export default function Navbar () {

    return(
        <nav className="container mx-auto my-3 flex justify-center" >
            <div className="container flex flex-row justify-between items-center" >
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
                <i className="fa-solid fa-bars lg:hidden sm:block small:block"></i>
            </div>
        </nav>
    )
}