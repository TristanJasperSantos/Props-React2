import React from "react";
import Logo from "../images/Fill 213.png";



const Header = ()=>{
    return (
        <nav className=" h-16 bg-red-500 flex justify-center items-center w-full mb-12">
            <div className=" flex gap-4">
                <img className=" w-7 h-7" src={Logo} alt="image of a logo" />
                <p className=" text-xl text-white">my travel journal.</p>
            </div>
        </nav>

    )
}

export default Header;