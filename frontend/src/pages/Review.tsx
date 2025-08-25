import React from "react";
import { motion } from "framer-motion";

const reviewCss = `
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

const Review = () => {
    return (
        <div className="page">
            <style>{reviewCss}</style>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2>映画レビュー</h2>
            </motion.div>
        </div>
    );
};

export default Review;
