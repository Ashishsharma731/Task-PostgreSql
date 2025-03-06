import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../constants/itemConstants";
import { getItems, createItem, updateItem, deleteItem } from "../../api";

export const fetchItems = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
        const { data } = await getItems(token);
        dispatch({ type: GET_ITEMS, payload: data });
    } catch (error) {
        console.error(error.response.data);
    }
};

export const addItem = (itemData) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
        const { data } = await createItem(itemData, token);
        dispatch({ type: ADD_ITEM, payload: data.item });
    } catch (error) {
        console.error(error.response.data);
    }
};

export const editItem = (id, itemData) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
        const { data } = await updateItem(id, itemData, token);
        dispatch({ type: UPDATE_ITEM, payload: data.item });
    } catch (error) {
        console.error(error.response.data);
    }
};

export const removeItem = (id) => async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
        await deleteItem(id, token);
        dispatch({ type: DELETE_ITEM, payload: id });
    } catch (error) {
        console.error(error.response.data);
    }
};
