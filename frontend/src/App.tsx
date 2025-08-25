import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Review from "./pages/Review";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                        Movie Map
                    </motion.h1>
                    <Navigation />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/review" element={<Review />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
