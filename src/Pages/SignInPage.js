import React from 'react'; 
import {FcGoogle} from "react-icons/fc"; 
import img from "../images/img.jpg"; 

const SignInPage = () => {
    return (
        <div className="flex justify-between h-sreen">
             <div className="flex flex-col justify-center mx-auto">
               <h1 className="mb-4">Bonjour</h1> 
               <form className="space-y-6 mb-4">
                   <div>
                       <label>Email</label> <br />
                      <input type="text"   className="w-full mt-2 py-2 rounded-md  border px-2 outline-none focus:ring-1" placeholder="Entrer votre email" />
                   </div>
                   <div>
                       <label>Password</label><br />
                      <input type="password"  className=" py-2 mt-2 rounded-md w-full border px-2 outline-none focus:ring-1"  placeholder="Entrer votre password" />
                   </div> 
                   <div className="flex justify-between">
                     <div>
                       <input type="checkbox" /> 
                       <span className="ml-2">Remember</span>
                     </div> 
                     <span>Forget password?</span>
                   </div>
                   <button className="flex justify-center text-white bg-green-800 py-2 w-full">Sign In</button> 
                   <button className="flex items-center space-x-2 py-2 justify-center border y-2 w-full ">
                       <FcGoogle className="w-6 h-6 object-cover" /> 
                       <span>Sign in with google </span>
                   </button> 
               </form>
               <div>
                   <div>Don't have an account? <span className="font-bold">Sign up for free</span></div>
               </div>
           </div> 
           <img src={img} alt="" className="w-1/2 h-screen object-cover" />
        </div>
    )
}

export default SignInPage
