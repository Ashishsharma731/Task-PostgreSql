import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, removeItem, editItem } from "../redux/actions/itemActions";

const ItemList = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.items);
    const userId  = useSelector((state) => state.user?.userId);
    
    const filteredItems = items.filter((item) => item.user_id === Number(userId));

    const [editMode, setEditMode] = useState(null);
    const [editedData, setEditedData] = useState({ title: "", description: "" });

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    };

    const handleEdit = (item) => {
        setEditMode(item.id);
        setEditedData({ title: item.title, description: item.description }); 
    };

    const handleChange = (e) => {
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    const handleSave = (id) => {
        dispatch(editItem(id, editedData));
        setEditMode(null); 
    };

    const handleCancel = () => {
        setEditMode(null);
    };

    return (
        <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Items</h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">Title</th>
                        <th className="border border-gray-300 p-2">Description</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((item) => (
                        <tr key={item.id} className="border border-gray-300">
                            {editMode === item.id ? (
                                <>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            name="title"
                                            value={editedData.title}
                                            onChange={handleChange}
                                            className="w-full px-2 py-1 border rounded"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <input
                                            type="text"
                                            name="description"
                                            value={editedData.description}
                                            onChange={handleChange}
                                            className="w-full px-2 py-1 border rounded"
                                        />
                                    </td>
                                    <td className="p-2">
                                        <button
                                            onClick={() => handleSave(item.id)}
                                            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="bg-gray-500 text-white px-3 py-1 rounded"
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="p-2">{item.title}</td>
                                    <td className="p-2">{item.description}</td>
                                    <td className="p-2">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemList;
