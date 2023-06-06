import React, { useState } from "react";
import { LoginAPI } from "../api/authAPI";

// import { logo } from "../assets/logo.jpg";

import "../Sass/LoginComponent.scss"

export default function LoginComponent(){
    const [credentails, setCredentails] = useState({});
    const login = async ()=>{
       try {
        let res = await LoginAPI(credentails.email, credentails.password);
        console.log(res?.user);
       } catch (err) {
        console.log(err.errors.message);
       }
    };
    return(
        <div className="flex flex-col md:flex-row h-screen items-center">
            <div className="h-screen md:w-1/2 xl:w-2/3 lg-block hidden">
                <img src="../assets/logo.jpg" alt=""  className="w-full h-full object"/>
            </div>
            <div className="bg-white items-center justify-center flex md:mx-auto md:mx-0 md:max-w-md lg:max-w-full  w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12">
                <div className="w-full h-100">
                    <h1 className="text-xl font-bold">Login</h1>
                    <p className="text-xl md:text-2xl font-bold leading-tightmt-12">Login to your account on tolobelaRDC</p>

                    <div className="mt-6">
                        <div>
                            <input onChange={(event)=> setCredentails({
                                ...credentails, email: event.target.value
                                })}
                                type="email" className="w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3"
                                placeholder="Entrez votre email"/>
                        </div>

                        <div className="mt-4">
                            <input onChange={(event)=> setCredentails({
                                ...credentails, password: event.target.value
                                })}
                                type="password" className="w-full bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none rounded-lg px-4 py-3"
                                placeholder="Entrez votre Mot de passe"/>
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700">Forgot password </a>
                        </div>

                        <button onClick={login} className="w-full block bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none">
                            Se connecter
                        </button>

                        <hr className="my-6 border-gray-300 w-full"/>

                        <button type="button" className="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border">
                            <div className="flex items-center justify-center">
                                <span className="ml-4">Login with Google</span>
                            </div>
                        </button>

                        <p>&copy; 2023 Chrinovic Mukeba</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}