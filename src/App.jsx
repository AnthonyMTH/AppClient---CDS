import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import PostFormPage from "./pages/PostForm";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<HomePage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/my-posts" element={<h1>Page</h1>} />
                <Route path="/add-post" element={<PostFormPage />} />
                <Route path="/posts/:id" element={<PostFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
