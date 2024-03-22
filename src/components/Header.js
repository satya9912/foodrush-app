import { useState } from "react";
import { Link } from "react-router-dom";
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
                        <Link className="px-6" to={"/"}>
                            <li>Home</li>
                        </Link>
                        <Link className="px-6" to={"/about"}>
                            <li>About</li>
                        </Link>
                        <Link className="px-6" to={"/contact"}>
                            <li>Contact</li>
                        </Link>
                        {/* <Link className="px-6" to={"/instamart"}>
                            <li>Instamart</li>
                        </Link> */}

                        <Link className="px-6" to={"/cart"}>
                            <img className="w-11 mr-2" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                            <span className="text-lg w-18 h-7 absolute top-7 right-16 bg-yellow-500 rounded-lg p-[3px] mb-1">{cartItems.length}</span>
                        </Link>

                        <Link to={"/login"}> Login </Link>

                    </ul>
                </div>
            </div>

            {/* <p>{isOnline ? "🟢" : "🔴"}</p> */}
       </div>
    )
}

export default Header;