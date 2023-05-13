import "bootstrap/dist/css/bootstrap.css";
import { Container, Button, InputGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Results from "./Results";

// to import individual needed components from react-bootstrap to use
const Search = () => {
  const fetchBurger = async () => {
    await fetch(
      //https://bobsburgers-api.herokuapp.com/storeNextDoor?episode=5&&season=6
      `https://bobsburgers-api.herokuapp.com/burgerOfTheDay?season=${searchSeason}&&episode=${searchEpisode}`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setPosts(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSeasonChange = (e) => {
    setSearchSeason(e.target.value);
  };
  const handleEpisodeChange = (e) => {
    setSearchEpisode(e.target.value);
  };
  const handleClick = () => {
    console.log(searchSeason, searchEpisode);
    fetchBurger();
  };
  const [searchSeason, setSearchSeason] = useState("");
  const [searchEpisode, setSearchEpisode] = useState("");
  const [posts, setPosts] = useState(null);

  return (
    <div>
      <Container>
        <h2>Bob's Burgers search</h2>
        <div className="Input-Group">
          {" "}
          <span className="input-group-text">Season</span>
          <input
            value={searchSeason}
            onChange={handleSeasonChange}
            className="bg-light text-dark"
            type="text"
          ></input>
          <span className="input-group-text">Episode</span>
          <input
            value={searchEpisode}
            onChange={handleEpisodeChange}
            className="bg-light text-dark"
            type="text"
          ></input>
          <button type="button" onClick={handleClick} className="btn btn-light">
            Search
          </button>
          <div>
            Burger of the Day
            {posts?.forEach((name) => (
              <p>{name}</p>
            ))}
          </div>
        </div>
      </Container>
      <Results />
    </div>
  );
};

export default Search;
