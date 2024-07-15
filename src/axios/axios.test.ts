import axios from "axios";

const BASE_URL = "https://koreanjson.com";

const client = axios.create({
  baseURL: BASE_URL
});

export async function getTest() {
  const endpoint = "/posts/1";
  const response = await client.get(endpoint);
  return response.data;
}
