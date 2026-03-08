import axios from "axios";

const PEXELS_API_KEY = import.meta.env.VITE_PIXELS_API_KEY;


export async function fetchPhotos(query, page = 1, per_page = 20) {
    const res = await axios.get("https://api.pexels.com/v1/search", {
        params: {
            query: query,
            page: page,
            per_page: per_page
        },
        headers: {
            Authorization: PEXELS_API_KEY
        },

    })
    return res.data

}