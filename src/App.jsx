import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Page</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/posts' element={<h1>Page</h1>} />
          <Route path='/add-post' element={<h1>Page</h1>} />
          <Route path='/posts/:id' element={<h1>Page</h1>} />
          <Route path='/profile' element={<h1>Page</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App