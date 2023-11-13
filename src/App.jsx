import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Page</h1>} />
        <Route path='/login' element={<h1>Page</h1>} />
        <Route path='/register' element={<h1>Page</h1>} />
        <Route path='/posts' element={<h1>Page</h1>} />
        <Route path='/add-post' element={<h1>Page</h1>} />
        <Route path='/posts/:id' element={<h1>Page</h1>} />
        <Route path='/profile' element={<h1>Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App