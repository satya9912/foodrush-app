import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
import logo from "../utils/images/icon.jpg"

const Header = () => {
    const [isLogged, setIsLogged] = useState(false);
    const isOnline = useAuth();
    const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className="fixed right-0 left-0 top-0 bg-gray-100 shadow-md h-24">
            <div className="flex justify-between align-middle mb-9">
                <div>
                    <Link to="/">
                    <img alt="logo" className="h-24 w-24 rounded-[50%] object-fill ml-2" src={logo}/>
                    </Link>
                </div>
                <div className="static">
                    <ul className="flex py-10">
                        <li className="p-2 hover:bg-[#D97919] hover:text-white rounded-md">
                            <NavLink to={"/"}>Home</NavLink>
                        </li>

                        <li className="p-2 hover:bg-[#D97919] hover:text-white rounded-md">
                            <NavLink to={"/about"}>About </NavLink>
                        </li>

                        <li className="p-2 hover:bg-[#D97919] hover:text-white rounded-md">
                            <NavLink to={"/contact"}>Contact </NavLink>
                        </li>
                        {/* <Link className="px-6" to={"/instamart"}>
                            <li>Instamart</li>
                        </Link> */}

                        <Link className="px-6" to={"/cart"}>
                            <img className="w-11 mr-2" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                            <span className="h-7 w-4 absolute top-7 right-[80px] bg-orange-600 rounded-lg text-center mb-1 p-1 text-white text-sm">{cartItems.length}</span>
                        </Link>

                        <NavLink className="p-2 hover:bg-[#D97919] hover:text-white rounded-md" to={"/login"}> Login </NavLink>

                    </ul>
                </div>
            </div>

            {/* <p>{isOnline ? "🟢" : "🔴"}</p> */}
       </div>
    )
}

export default Header;