import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/review", label: "Review" },
    ];

    const styles = {
        nav: {
            ul: {
                listStyle: 'none' as const,
                padding: 0,
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
            },
            a: {
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 500,
                transition: 'color 0.3s ease',
            },
            aActive: {
                color: '#61dafb',
                borderBottom: '2px solid #61dafb',
            },
        },
    };

    return (
        <nav>
            <ul style={styles.nav.ul}>
                {navItems.map((item) => (
                    <motion.li
                        key={item.path}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to={item.path}
                            style={{
                                ...styles.nav.a,
                                ...(location.pathname === item.path ? styles.nav.aActive : {}),
                            }}
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
