import axios from "./axios.js";

export const getUserRequest = id => axios.get(`/user/${id}`)