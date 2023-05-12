import "bootstrap/dist/css/bootstrap.css";
import { Container, Button, InputGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Results from "./Results";

// to import individual needed components from react-bootstrap to use
const Search = () => {
  const fetchBurger = async () => {
    await fetch(
      `https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${search}`
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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    console.log(search);
    fetchBurger();
  };
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(null);

  return (
    <div>
      <Container>
        <h2>Bob's Burgers search</h2>
        <div className="Input-Group">
          {" "}
          <input
            value={search}
            onChange={handleChange}
            className="bg-light text-dark"
            type="text"
          />
          <button type="button" onClick={handleClick} className="btn btn-light">
            Search
          </button>
          <h2>{posts?.name}</h2>
        </div>
      </Container>
      <Results />
    </div>
  );
};

export default Search;
