import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../../styles/theme";

const Sidebar = () => {
    const location = useLocation();

    const menu = [
        { name: "Dashboard", path: "/dashboard", icon: "📊" },
        { name: "Add Expense", path: "/add", icon: "➕" },
        { name: "Insights", path: "/insights", icon: "💡" },
    ];

    return (
        <motion.div
            style={{
                width: "280px",
                minHeight: "calc(100vh - 80px)",
                background: theme.bg,
                backdropFilter: "blur(10px)",
                borderRight: `1px solid ${theme.border}`,
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                position: "sticky",
                top: "80px",
            }}
        >
            {}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                style={{
                    marginBottom: "3rem",
                    paddingBottom: "1rem",
                    borderBottom: `1px solid ${theme.border}`,
                }}
            >
                <h2
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "800",
                        color: theme.textPrimary,
                        letterSpacing: "-0.02em",
                        margin: 0,
                    }}
                >
                    Agros
                </h2>
                <p
                    style={{
                        fontSize: "0.75rem",
                        color: theme.textTertiary,
                        margin: "0.25rem 0 0 0",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                    }}
                >
                    Analytics
                </p>
            </motion.div>

            {}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    flex: 1,
                }}
            >
                {menu.map((item, index) => {
                    const isActive = location.pathname === item.path;

                    return (
                        <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                        >
                            <Link
                                to={item.path}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    padding: "1rem 1.25rem",
                                    borderRadius: "12px",
                                    textDecoration: "none",
                                    background: isActive
                                        ? theme.accentLight
                                        : "transparent",
                                    border: "none",
                                    transition: "all 0.3s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                    fontWeight: "500",
                                    fontSize: "0.95rem",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.target.style.background = theme.cardHover;
                                        e.target.style.borderColor = theme.borderLight;
                                        e.target.style.transform = "translateX(4px)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.target.style.background = "transparent";
                                        e.target.style.transform = "translateX(0)";
                                    }
                                }}
                            >
                                {}
                                <span style={{ fontSize: "1.25rem", zIndex: 1 }}>
                                    {item.icon}
                                </span>
                                <span style={{ zIndex: 1 }}>
                                    {item.name}
                                </span>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>

            {}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                    marginTop: "auto",
                    paddingTop: "2rem",
                    borderTop: `1px solid ${theme.border}`,
                    textAlign: "center",
                }}
            >
                <p
                    style={{
                        fontSize: "0.75rem",
                        color: theme.textTertiary,
                        margin: 0,
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                    }}
                >
                    Version 1.0
                </p>
                <div
                    style={{
                        marginTop: "0.5rem",
                        height: "2px",
                        background: `linear-gradient(90deg, ${theme.textSecondary} 0%, transparent 100%)`,
                        borderRadius: "1px",
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default Sidebar;