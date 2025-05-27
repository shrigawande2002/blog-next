import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';

const RegisterForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-xl p-8 space-y-6 border border-yellow-500">
                <h2 className="text-3xl font-bold text-center text-yellow-400">Create Account</h2>

                <form className="space-y-4">
                    <div className="flex items-center border border-yellow-500 rounded-lg px-3 py-2 bg-black focus-within:ring-2 focus-within:ring-yellow-400">
                        <FaUser className="text-yellow-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full outline-none bg-transparent text-yellow-100 placeholder-yellow-400"
                        />
                    </div>

                    <div className="flex items-center border border-yellow-500 rounded-lg px-3 py-2 bg-black focus-within:ring-2 focus-within:ring-yellow-400">
                        <FaEnvelope className="text-yellow-400 mr-2" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full outline-none bg-transparent text-yellow-100 placeholder-yellow-400"
                        />
                    </div>

                    <div className="flex items-center border border-yellow-500 rounded-lg px-3 py-2 bg-black focus-within:ring-2 focus-within:ring-yellow-400">
                        <FaPhoneAlt className="text-yellow-400 mr-2" />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full outline-none bg-transparent text-yellow-100 placeholder-yellow-400"
                        />
                    </div>

                    <div className="flex items-center border border-yellow-500 rounded-lg px-3 py-2 bg-black focus-within:ring-2 focus-within:ring-yellow-400">
                        <FaLock className="text-yellow-400 mr-2" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full outline-none bg-transparent text-yellow-100 placeholder-yellow-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-semibold transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-yellow-300">
                    Already have an account? <a href="#" className="text-yellow-500 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
