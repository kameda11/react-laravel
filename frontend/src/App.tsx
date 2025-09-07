import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Review from "./pages/Review";

function AppContent() {
  const location = useLocation();
  const styles = {
    app: {
      textAlign: 'center' as const,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
    },
    header: {
      backgroundColor: '#616367',
      minHeight: '30vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
      flexShrink: 0,
    },
    title: {
      marginBottom: '40px',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      overflowY: 'auto' as const,
      backgroundColor: '#616367',
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          style={styles.title}
        >
          Movie Map
        </motion.h1>
        <Navigation />
      </header>
      <motion.main
        style={styles.main}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
