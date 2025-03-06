import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState(""); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); 
        try {
            await dispatch(register(userData)); 
            navigate("/login"); 
        } catch (err) {
            setError(err?.response?.data?.error || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Register</h2>

                {error && (
                    <div className="mt-4 bg-red-100 text-red-600 px-4 py-2 rounded-lg text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-600 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-600 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
