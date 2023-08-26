import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_ENDPOINT } from '../../Api/apiEndpoint';
import Section from '../../components/Section/Section';

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

export const NewAlbums = () => {
    const [newAlbumData, setNewAlbumData] = useState([]);

    useEffect(() => {
        generateNewAlbumData();
    }, []);

    const generateNewAlbumData = async () => {
        try {
            const data = await fetchNewAlbums();
            console.log(data);
            setNewAlbumData(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Section type="album" title="Top Albums" data={newAlbumData} />
    )
};