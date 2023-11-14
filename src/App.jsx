import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import PostFormPage from "./pages/PostForm"
import ProfilePage from "./pages/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element={<ProtectedRoute/>}>
            <Route path='/posts' element={<PostsPage/>} />
            <Route path='/add-post' element={<PostFormPage/>} />
            <Route path='/posts/:id' element={<PostFormPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App