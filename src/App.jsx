// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './context/ProtectedRoute';
import BlogDetail from './pages/BlogDetail';
import AddBlog from './pages/AddBlog';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" index element={<Home />} />
          <Route path="/blog" element={<ProtectedRoute> <Blog /> </ProtectedRoute>} />
          <Route path="/blog/:id" element={<ProtectedRoute> <BlogDetail /> </ProtectedRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/add" element={<ProtectedRoute> <AddBlog /> </ProtectedRoute>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
