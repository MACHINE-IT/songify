import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_ENDPOINT } from '../../../Api/apiEndpoint';
import Section from '../../../components/Section/Section';

export const fetchSongs = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        console.log("API Response:", res.data);
        return res.data;
    } catch (err) {
        console.log(err)
    }
    console.log("Fetch completed.");
}

export const JazzSongs = () => {
    const [songsData, setSongsData] = useState([]);
    const [jazzSongsData, setJazzSongsData] = useState([]);

    useEffect(() => {
        generateSongsData();
    }, []);

    const generateSongsData = async () => {
        try {
            const data = await fetchSongs();
            console.log(data);
            setSongsData(data);
            const jazzSongs = data.filter((song) => song.genre.label === "Jazz");
            setJazzSongsData(jazzSongs);
        } catch (err) {
            console.log(err);
        }
    };
    console.log("jazzsongs: ", jazzSongsData);

    return (
        <Section type="song" data={jazzSongsData} />
    )

};