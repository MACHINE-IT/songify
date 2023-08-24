import { fetchTopAlbums } from "./Api/apiTopAlbums";
import { fetchNewAlbums } from "./Api/apiNewAlbums";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import styles from './App.module.css';


function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumData(data);
    } catch (err) {
      console.log(err);
    }
  }

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
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumData} />
        <Section type="album" title="New Albums" data={newAlbumData} />
      </div>
    </>
  );
}

export default App;
