import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/review", label: "Review" },
    ];

    return (
        <nav className="navigation">
            <ul>
                {navItems.map((item) => (
                    <motion.li
                        key={item.path}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to={item.path}
                            className={location.pathname === item.path ? "active" : ""}
                        >
                            {item.label}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
