import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { PostProvider } from "./context/PostContext";

import PostFormPage from "./pages/PostFormPage";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/posts" element={<h1>Page</h1>} />
            <Route path="/my-posts" element={<h1>Page</h1>} />
            <Route path="/add-post" element={<PostFormPage/>} />
            <Route path="/posts/:id" element={<h1>Page</h1>} />
            <Route path="/profile" element={<h1>Page</h1>} />
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
