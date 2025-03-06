import React from "react";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col items-center">
                
                <div className="w-full flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800">
                        🏠 Dashboard
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300"
                    >
                        Logout
                    </button>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-md">
                        <ItemForm />
                    </div>
                </div>

                <div className="w-full mt-8">
                    <ItemList />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
