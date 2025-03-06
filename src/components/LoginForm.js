import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
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
            await dispatch(login(userData)); 
            navigate("/dashboard");
        } catch (err) {
            setError(err?.response?.data?.error || "Invalid Credentials. Please try again."); 
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Login</h2>

                {error && (
                    <div className="mt-4 bg-red-100 text-red-600 px-4 py-2 rounded-lg text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6">

                    <div>
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
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
};

export default LoginForm;
