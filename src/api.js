import { apiUrl } from "./config";

export const allMovies = () => {
  return fetch(apiUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));
};
