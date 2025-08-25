import React from "react";
import { motion } from "framer-motion";

const homeCss = `
.page {
    padding: 40px 20px;
    min-height: 60vh;
    background-color: #282c34;
    text-align: center;
}

.page h2 {
    color: white;
    margin-bottom: 20px;
    font-size: 2rem;
}
`;

const Home = () => {
    return (
        <div className="page">
            <style>{homeCss}</style>
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
