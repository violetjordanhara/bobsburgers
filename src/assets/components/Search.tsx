import "bootstrap/dist/css/bootstrap.css";
import { Container, Button, InputGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Results from "./Results";

// to import individual needed components from react-bootstrap to use
const Search = () => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    console.log(search);
  };
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://bobsburgers-api.herokuapp.com/burgerOfTheDay/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
        </div>
      </Container>
      <Results />
    </div>
  );
};

export default Search;
