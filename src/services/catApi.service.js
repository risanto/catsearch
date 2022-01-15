import axios from "axios";

const baseUrl = "https://api.thecatapi.com/v1";
const apiKey = "1902ff6c-f0a8-47dc-a4e6-5a720131abd5";

export async function findCatBreed(query) {
  const response = await axios({
    method: "get",
    url: `${baseUrl}/breeds/search?q=${query}`,
    headers: {
      "x-api-key": apiKey,
    },
  });

  return response.data;
}
