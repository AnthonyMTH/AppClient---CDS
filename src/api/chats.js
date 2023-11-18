import axios from "./axios.js";

export const getChatsRequest = id => axios.get(`/chats/${id}`)

