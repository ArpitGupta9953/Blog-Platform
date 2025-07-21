import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [posts, setPosts] = useState([]);
  
  const handleLogin = () => {
    setCurrentUser(true);
    toast.success("🎉 Login successful! Welcome back!", {
      position: "top-right",
      autoClose: 3000,
    });
  };
  
  const handleLogout = () => {
    setCurrentUser(false);
    toast.info("👋 Logged out successfully. See you soon!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
    toast.success("📝 Post published successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <Router>
      <Topbar user={currentUser} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Homepage posts={posts} />} />
        <Route path="/posts" element={<Homepage posts={posts} />} />
        <Route 
          path="/register" 
          element={currentUser ? <Navigate to="/" replace /> : <Register />} 
        />
        <Route 
          path="/login" 
          element={currentUser ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />} 
        />
        <Route path="/post/:id" element={<Single />} />
        <Route 
          path="/write" 
          element={currentUser ? <Write onAddPost={addPost} /> : <Navigate to="/login" replace />}
        />
        <Route 
          path="/settings" 
          element={currentUser ? <Settings /> : <Navigate to="/login" replace />} 
        />
      </Routes>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
