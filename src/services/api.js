import axios from "axios";

const API_URL = "https://kwv97x-8080.csb.app/api";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});