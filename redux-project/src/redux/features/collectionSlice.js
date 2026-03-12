import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem("collection")) || []
}


const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addToCollection: (state, action) => {
            const exists = state.items.find(item => item.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload);
                localStorage.setItem("collection", JSON.stringify(state.items));
                console.log("hahahhaha");

            }
        },
        removeFromCollection: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem("collection", JSON.stringify(state.items));
        },
        clearCollection: (state) => {
            state.items = [];
            localStorage.removeItem("collection");
        },
        addedToCollection: () => {
            toast.success('Added to collection ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        },
        removeToast: () => {
            toast.error('Removed from collection ❌', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

        }
    }
});


export const { addToCollection, removeFromCollection, clearCollection, addedToCollection, removeToast } = collectionSlice.actions;
export default collectionSlice.reducer;