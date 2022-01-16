import "./App.css";
import { useState, useEffect } from "react";
import * as catApiService from "./services/catApi.service";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const delayDebounceFn = setTimeout(async () => {
        try {
          const result = await catApiService.findCatBreed(searchTerm);
          setSearchResult(result);
        } catch (error) {
          console.log(error);
        }
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm]);

  useEffect(() => {
    const sortResult = () => {
      const sorted = searchResult.sort((a, b) => {
        if (sortOrder === "asc") {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        } else {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
      });
      setSearchResult([...sorted]);
    };
    if (sortBy && searchResult) sortResult();
    // eslint-disable-next-line
  }, [sortBy, sortOrder]);

  return (
    <div className="App">
      <header>
        <p>Cat breeds search</p>
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Search here..."
          onChange={(e) => setSearchTerm(e.target.value.trim())}
        />
        {searchResult && (
          <div>
            <label htmlFor="sort">Sort by:</label>
            <select
              name="sort"
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="weight">Weight</option>
              <option value="lifespan">Lifespan</option>
            </select>
            <label htmlFor="sort">Order:</label>
            <select
              name="sort"
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        )}
      </header>
      <main>
        {searchResult?.map((item) => (
          <div key={item.id} data-testid="cats">
            {item.reference_image_id ? (
              <img
                src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
                alt={item.name}
                height={300}
              ></img>
            ) : (
              <img src={`cat.ico`} alt={item.name} height={300}></img>
            )}
            <div>Name: {item.name}</div>
            {item.weight && <div>Weight: {item.weight.metric} kg</div>}
            {item.life_span && <div>Lifespan: {item.life_span} years</div>}
            {item.description && <div>{item.description}</div>}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
