import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_ENDPOINT } from '../../Api/apiEndpoint';
import Section from '../../components/Section/Section';

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

export const BluesSongs = () => {
    const [songsData, setSongsData] = useState([]);
    const [bluesSongsData, setBluesSongsData] = useState([]);

    useEffect(() => {
        generateSongsData();
    }, []);

    const generateSongsData = async () => {
        try {
            const data = await fetchSongs();
            console.log(data);
            setSongsData(data);
            const bluesSongs = data.filter((song) => song.genre.label === "Blues");
            setBluesSongsData(bluesSongs);
        } catch (err) {
            console.log(err);
        }
    };
    console.log("bluessongs: ", bluesSongsData);

    return (
        <Section type="song" data={bluesSongsData} />
    )

};