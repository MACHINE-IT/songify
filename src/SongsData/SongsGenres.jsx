import { BACKEND_ENDPOINT } from "../Api/apiEndpoint";
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Section from "../components/Section/Section";
import SongsTabsFilter from "../components/SongsTabsFilterSection/SongsTabsFilter";

export const fetchGenres = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        const data = res.data;
        return data
    } catch (err) {
        console.log(err)
    }
}

export const SongsGenres = () => {
    const [songGenres, setSongGenres] = useState([])

    useEffect(() => {
        const generateGenresData = async () => {
            try {
                const genresRes = await fetchGenres();
                setSongGenres(genresRes.data)

                return genresRes.data
            } catch (err) {
                console.log(err)
            }
        };

        generateGenresData();

    }, []);

    return (
        <SongsTabsFilter title="Songs" genres={songGenres} />
    )
}

export default SongsGenres