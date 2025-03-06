import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/itemActions";

const ItemForm = () => {
    const [itemData, setItemData] = useState({ title: "", description: "" });
    const [error, setError] = useState(""); 
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setItemData({ ...itemData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!itemData.title.trim() || !itemData.description.trim()) {
            setError("Both fields are required.");
            return;
        }
        setError(""); 
        dispatch(addItem(itemData));
        setItemData({ title: "", description: "" });
    };

    return (
        <div className=" items-center justify-center">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Add Item</h2>

                {error && (
                    <div className="mt-4 bg-red-100 text-red-600 px-4 py-2 rounded-lg text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label className="block text-gray-600 text-sm font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter item title"
                            value={itemData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-600 text-sm font-medium">Description</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter item description"
                            value={itemData.description}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ItemForm;
