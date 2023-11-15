import axios from "./axios.js";

export const getAllPostsRequest = () => axios.get('/posts')

export const getMyPostsRequest = () => axios.get('/my-posts')

export const createPostRequest = (post) => axios.post('/posts', post)

export const updatePostRequest = (id, post) => axios.put(`/posts/${id}`, post)

export const getPostRequest = (id) => axios.get(`/posts/${id}`)

export const deletePostRequest = (id) => axios.delete(`/posts/${id}`)