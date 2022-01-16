import "./App.css";
import { useState, useEffect } from "react";
import * as catApiService from "./services/catApi.service";
import sortResult from "./utils/sortResult";

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
    if (searchTerm.length === 0) {
      setSearchResult(null);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (sortBy && searchResult) {
      const sorted = sortResult(searchResult, sortBy, sortOrder);
      setSearchResult([...sorted]);
    }
    // eslint-disable-next-line
  }, [sortBy, sortOrder]);

  return (
    <div className="App">
      <header>
        <img id="cat-icon" src={`cat.ico`} alt={"cat icon"} height={100}></img>
        <h1>Search cat breeds</h1>
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Search here..."
          onChange={(e) => setSearchTerm(e.target.value.trim())}
        />
        {!!searchResult?.length && (
          <div className="sort-order">
            <label id="sort-label" htmlFor="sort">
              Sort by:
            </label>
            <select
              name="sort"
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="weight">Weight</option>
              <option value="life_span">Lifespan</option>
            </select>
            <label id="order-label" htmlFor="order">
              Order:
            </label>
            <select
              name="order"
              id="order"
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
        {searchResult &&
          (searchResult.length ? (
            <h2>Displaying {searchResult.length} result(s)</h2>
          ) : (
            <h2>Can't find anything :(</h2>
          ))}
        {searchResult?.map((item) => (
          <div className="cat-card" key={item.id} data-testid="cat">
            {item.reference_image_id ? (
              <img
                data-testid="cat-img"
                src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
                alt={item.name}
                height={300}
              ></img>
            ) : (
              <img src={`cat.ico`} alt={item.name} height={300}></img>
            )}
            <div className="name">
              Name: <span>{item.name}</span>
            </div>
            <div>
              Weight:{" "}
              {item.weight ? (
                <span>{item.weight.metric} kg</span>
              ) : (
                "No information"
              )}
            </div>
            <div>
              Lifespan:{" "}
              {item.life_span ? (
                <span>{item.life_span} years</span>
              ) : (
                "No information"
              )}
            </div>
            <p className="desc">{item.description ?? item.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
