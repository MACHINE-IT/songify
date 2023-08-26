import { fetchNewAlbums } from "./Api/apiNewAlbums";
import { TopAlbums, fetchTopAlbums } from "./AlbumsData/TopAlbums/TopAlbums";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import styles from './App.module.css';
import SongsTabsFilter from "./components/SongsTabsFilterSection/SongsTabsFilter";
import { AllSongs } from "./SongsData/AllSongs/AllSongs";
import SongsGenres from "./SongsData/SongsGenres";
import { NewAlbums } from "./AlbumsData/NewAlbums/NewAlbums";
import FAQs from "./components/FAQs/FAQs";


function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);



  const generateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      console.log(data);
      setNewAlbumData(data);
    } catch (err) {
      console.log(err);
    }
  }



  useEffect(() => {
    fetchTopAlbums();
    generateNewAlbumData();
  }, []);

  const handleTopAlbumsData = (data) => {
    setTopAlbumData(data);
  }

  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <TopAlbums />
        <NewAlbums />
        {/* <Section type="album" title="Top Albums" data={topAlbumData} /> */}
        {/* <Section type="album" title="New Albums" data={newAlbumData} /> */}
        <hr className={styles.hrLine} />
        <SongsGenres />
        <hr className={styles.hrLine} />
        <FAQs />
      </div>
    </>
  );
}

export default App;
