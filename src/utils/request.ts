import axios from "axios";

const apiAddress =
  import.meta.env.MODE === "production"
    ? "https://mercedes.muratyuksel.dev/api"
    : "/api";

const request = axios.create({
  baseURL: apiAddress,
  responseType: "json",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  },
});

export default request;
