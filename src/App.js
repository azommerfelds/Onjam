import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Repertoire from "./components/Repertoire/Repertoire";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Track from "./components/Track/Track";
import Tracklist from "./components/Tracklist/Tracklist";
import songs from "./data/songs"; // replace with API data

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [repertoire, setRepertoire] = useState([]);

  const addSong = (songSelected) => {
    if (!repertoire.find((song) => song.id === songSelected.id)) {
      setRepertoire([...repertoire, songSelected]);
    }
  };

  const removeSong = (songSelected) => {
    setRepertoire(repertoire.filter((song) => song.id !== songSelected.id));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredSongs = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())
    );
    if (search != "") {
      setResults(filteredSongs);
    } else setResults([]);
  };

  return (
    <div className="App">
      <Header></Header>
      <SearchBar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      ></SearchBar>
      <SearchResults
        results={results}
        search={search}
        action={addSong}
      ></SearchResults>
      <Repertoire repertoire={repertoire} action={removeSong}></Repertoire>
    </div>
  );
}

export default App;
