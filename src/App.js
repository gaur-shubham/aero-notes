import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/Notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [alert, SetAlert] = useState(null);
  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={
                <Home showAlert={showAlert} />
              } />
              <Route exact path="/about" element={
                <About />
              } />
              <Route exact path="/login" element={
                <Login showAlert={showAlert} />
              } />
              <Route exact path="/signup" element={
                <Signup showAlert={showAlert} />
              } />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
