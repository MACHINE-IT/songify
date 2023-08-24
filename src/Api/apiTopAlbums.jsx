import axios from "axios";
import { BACKEND_ENDPOINT } from './apiEndpoint';

export const fetchTopAlbums = async () => {
    console.log('got inside start of fetchTopAlbums')
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        console.log("API Response:", res.data);
        return res.data;
    } catch (err) {
        console.log(err)
    }
    console.log("Fetch completed.");
}

