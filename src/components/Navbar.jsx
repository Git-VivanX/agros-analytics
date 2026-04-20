import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../styles/theme";

const Navbar = () => {
    const { logout } = useAuth();
    const location = useLocation();

    const navItems = [
        { path: "/dashboard", label: "Dashboard" },
        { path: "/add", label: "Add Expense" },
        { path: "/insights", label: "Insights" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                height: "80px",
                background: theme.bg,
                backdropFilter: "blur(10px)",
                borderBottom: `1px solid ${theme.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 2rem",
            }}
        >
            {}
            <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: theme.textPrimary,
                    letterSpacing: "-0.02em",
                }}
            >
                <Link
                    to="/dashboard"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    Agros Analytics
                </Link>
            </motion.div>

            {}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                {navItems.map((item, index) => (
                    <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                    >
                        <Link
                            to={item.path}
                            style={{
                                textDecoration: "none",
                                color: location.pathname === item.path
                                    ? theme.accent
                                    : theme.textSecondary,
                                fontWeight: "500",
                                fontSize: "0.95rem",
                                padding: "0.5rem 1rem",
                                borderRadius: "8px",
                                transition: "all 0.2s ease",
                                position: "relative",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = theme.accent;
                                e.target.style.background = theme.cardHover;
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = location.pathname === item.path
                                    ? theme.accent
                                    : theme.textSecondary;
                                e.target.style.background = "transparent";
                            }}
                        >
                            {item.label}
                            {location.pathname === item.path && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    style={{
                                        position: "absolute",
                                        bottom: "-2px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "20px",
                                        height: "2px",
                                        background: theme.accent,
                                        borderRadius: "1px",
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    </motion.div>
                ))}

                {}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: theme.dangerLight,
                        color: theme.danger,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    style={{
                        padding: "0.5rem 1.5rem",
                        borderRadius: "12px",
                        background: "transparent",
                        border: `1px solid ${theme.dangerLight}`,
                        color: theme.danger,
                        cursor: "pointer",
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        letterSpacing: "0.025em",
                        transition: "all 0.2s ease",
                    }}
                >
                    Logout
                </motion.button>
            </div>
        </motion.nav>
    );
};

export default Navbar;