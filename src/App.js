import "./App.css";
import { useState, useEffect } from "react";
import * as catApiService from "./services/catApi.service";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      try {
        if (searchTerm.length >= 3) {
          const result = await catApiService.findCatBreed(searchTerm);
          setSearchResult(result);
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Cat breeds search</p>
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Search here..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <main>{JSON.stringify(searchResult)}</main>
      </header>
    </div>
  );
}

export default App;
