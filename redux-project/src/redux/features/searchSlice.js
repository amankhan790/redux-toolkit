import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        activeTabs: "photos",
        results: [],
        loadingState: false,
        error: null
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;

        },
        setActiveTabs(state, action) {
            state.activeTabs = action.payload;
        },
        setResults(state, action) {
            state.results = action.payload;
        },
        setLoadingState(state, action) {
            state.loadingState = action.payload;
        },
    },
})

export const { setQuery, setActiveTabs, setResults, setLoadingState } = searchSlice.actions;

export default searchSlice.reducer;