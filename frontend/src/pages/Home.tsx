import React from "react";
import { motion } from "framer-motion";

const Home = () => {
    const styles = {
        page: {
            padding: "40px 20px",
            flex: 1,
            backgroundColor: "#616367",
            textAlign: "center" as const,
            display: "flex",
            flexDirection: "column" as const,
            justifyContent: "center",
        },
        title: {
            color: "white",
            marginBottom: "20px",
            fontSize: "2rem",
        },
    };

    return (
        <motion.div
            style={styles.page}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 style={styles.title}>映画一覧</h2>
            </motion.div>
        </motion.div>
    );
};

export default Home;
