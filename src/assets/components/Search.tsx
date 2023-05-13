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
        setPosts(data);
        //console.log(posts[0]?.name);
        //console logging posts returns the object only when search is clicked twice, but data works
        console.log(data.map((burger) => burger.name));
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

  // {posts?.forEach(post => (
  //   <li key={post.id}>post.name</li>
  // ))}

  // const listBurger = () => {
  //   console.log("burger to list");
  //   if (posts.length == 0) {
  //     return <p>type a valid episode</p>;
  //   } else {
  //     posts.map((post) => {
  //       <li key={post.id}>post.name</li>;
  //     });
  //   }
  // };

  const [searchSeason, setSearchSeason] = useState("");
  const [searchEpisode, setSearchEpisode] = useState("");
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Container>
        <h2>Bob's Burgers search</h2>

        <div className="input-group mb-3">
          {" "}
          <span className="input-group-text">Season</span>
          <input
            value={searchSeason}
            onChange={handleSeasonChange}
            className="bg-light text-dark"
            type="text"
          ></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Episode</span>
          <input
            value={searchEpisode}
            onChange={handleEpisodeChange}
            className="bg-light text-dark"
            type="text"
          ></input>
        </div>

        <button type="button" onClick={handleClick} className="btn btn-light">
          Search
        </button>
        <div>
          <h3>Burger of the Day coming up</h3>
          <div>
            {posts?.map((post) => (
              <li key={post.id}>{post.name}</li>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
