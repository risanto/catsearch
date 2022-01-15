import axios from "axios";

export async function findCatBreed(query) {
  const response = await axios({
    method: "get",
    url: `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
    headers: {
      "x-api-key": "1902ff6c-f0a8-47dc-a4e6-5a720131abd5",
    },
  });

  return response.data;
}
