import axios from "axios";

const baseUrl = "https://api.thecatapi.com/v1";
const apiKey = "";

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
