import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_ENDPOINT } from '../../Api/apiEndpoint';
import Section from '../../components/Section/Section';

export const fetchTopAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        console.log("API Response:", res.data);
        return res.data;
    } catch (err) {
        console.log(err)
    }
    console.log("Fetch completed.");
}

export const TopAlbums = ({ onTopAlbumsData }) => {
    const [topAlbumData, setTopAlbumData] = useState([]);

    useEffect(() => {
        generateTopAlbumData();
    }, []);

    const generateTopAlbumData = async () => {
        try {
            const data = await fetchTopAlbums();
            console.log(data);
            setTopAlbumData(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Section type="album" title="Top Albums" data={topAlbumData} />
    )
};