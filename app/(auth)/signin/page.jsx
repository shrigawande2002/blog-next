"use client"
import Login from "@/Components/Login"
import Register from "@/Components/Register"
import { useState } from "react"

const SignIn = () => {
    const [activeTab, setActiveTab] = useState("login") 

    return (
        <div className=' h-full m-4'>
            <div className="space-x-4">
                <button
                    onClick={() => setActiveTab("login")}
                    className={`p-2 rounded-md border border-cyan-400 font-semibold text-white border-none   ${activeTab === "login" ? "bg-yellow !text-darkprimary " : ""}`}
                >
                    Login
                </button>
                <button
                    onClick={() => setActiveTab("register")}
                    className={`p-2 rounded-md border border-cyan-400 font-semibold text-white border-none  ${activeTab === "register" ? "bg-yellow !text-darkprimary" : ""}`}
                >
                    Register
                </button>
            </div>

            <div className="mt-4 ">
                {activeTab === "login" && <div> 
                    <Login setActiveTab={setActiveTab} />
                     </div>}
                {activeTab === "register" && <div><Register setActiveTab={setActiveTab}/></div>}
            </div>
        </div>
    )
}

export default SignIn
