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

export const PopSongs = () => {
    const [songsData, setSongsData] = useState([]);
    const [popSongsData, setPopSongsData] = useState([]);

    useEffect(() => {
        generateSongsData();
    }, []);

    const generateSongsData = async () => {
        try {
            const data = await fetchSongs();
            console.log(data);
            setSongsData(data);
            const popSongs = data.filter((song) => song.genre.label === "Pop");
            setPopSongsData(popSongs);
        } catch (err) {
            console.log(err);
        }
    };
    console.log("popsongs: ", popSongsData);

    return (
        <Section type="song" data={popSongsData} />
    )

};