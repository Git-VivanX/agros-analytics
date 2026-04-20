import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar";
import { theme } from "../../styles/theme";

const AppLayout = ({ children }) => {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: theme.bg,
                color: theme.textPrimary,
                paddingTop: "80px", 
            }}
        >
            {}
            <Navbar />

            <div
                style={{
                    display: "flex",
                    minHeight: "calc(100vh - 80px)",
                }}
            >
                {}
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        display: window.innerWidth > 768 ? "block" : "none",
                    }}
                >
                    <Sidebar />
                </motion.div>

                {}
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        flex: 1,
                        padding: "2rem",
                        overflowY: "auto",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1400px",
                            margin: "0 auto",
                        }}
                    >
                        {children}
                    </div>
                </motion.main>
            </div>
        </div>
    );
};

export default AppLayout;