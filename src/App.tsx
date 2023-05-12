import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
import Search from "./assets/components/Search";
import Results from "./assets/components/Results";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Search />
    </>
  );
}

export default App;
