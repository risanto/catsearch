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
      <header>
        <p>Cat breeds search</p>
        <input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Search here..."
          onChange={(e) => setSearchTerm(e.target.value.trim())}
        />
      </header>
      <main>
        {searchResult?.map((item) => (
          <div key={item.id}>
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
