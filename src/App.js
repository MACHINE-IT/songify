import { fetchTopAlbums } from "./Api/api";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    generateTopAlbumData();
  }, []);


  return (
    <>
      <Navbar />
      <Hero />
      {
        topAlbumData.map(item => {
          return (
            <Card data={item} type='album' />
          )
        })
      }
    </>
  );
}

export default App;
