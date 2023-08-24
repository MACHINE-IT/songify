import axios from "axios";
import { BACKEND_ENDPOINT } from './apiEndpoint';


export const fetchNewAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        console.log("API Response:", res.data);
        return res.data;
    } catch (err) {
        console.log(err)
    }
    console.log("Fetch completed.");
}