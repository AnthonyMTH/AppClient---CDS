import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import PostPage from "./pages/PostPage"
import PostFormPage from "./pages/PostForm"
import ProfilePage from "./pages/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"
import NavBar from "./components/NavBar";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoute/>}>
                <Route path='/posts' element={<PostsPage/>} />
                <Route path="/my-posts" element={<PostsPage/>} />
                <Route path='/add-post' element={<PostFormPage/>} />
                <Route path='/posts/:id' element={<PostPage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
              </Route>  
            </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
