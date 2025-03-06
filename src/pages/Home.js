import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome</h1>
                <p className="text-gray-600 mb-6">Manage your items efficiently with our platform.</p>

                <div className="flex space-x-4">
                    <Link 
                        to="/register"
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                    >
                        Register
                    </Link>
                    
                    <Link 
                        to="/login"
                        className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
