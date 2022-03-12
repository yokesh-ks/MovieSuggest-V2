import { apiUrl } from "./config";

const getRequestUrl = (path) => `${apiUrl}/${path}`

export const apiCall = (path) =>
  fetch(getRequestUrl(path)).then((res) => res.json())

export const allMovies = () => apiCall('allMovies')

export const allCategory = () => apiCall('allCategory')