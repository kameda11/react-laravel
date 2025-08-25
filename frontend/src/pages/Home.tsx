import React from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.page}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2>映画一覧</h2>
            </motion.div>
        </div>
    );
};

export default Home;
