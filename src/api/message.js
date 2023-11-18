import axios from "./axios.js";

export const getMessagesRequest = id => axios.get(`/messages/${id}`)