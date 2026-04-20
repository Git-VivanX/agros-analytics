import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import Card from "../components/ui/Card";
import { Title, Text } from "../components/ui/Typography";
import Button from "../components/ui/Button";
import { theme } from "../styles/theme";

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await register(form.email, form.password);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                background: theme.bg,
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ width: "100%", maxWidth: "400px" }}
            >
                <Card style={{ padding: "3rem" }} variant="light">
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <Title variant="light" style={{ marginBottom: "0.5rem", fontSize: "2.5rem" }}>
                            Create Account
                        </Title>
                        <Text variant="secondary" colorVariant="light">
                            Join us to start tracking your expenses
                        </Text>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem"
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <input
                                type="email"
                                placeholder="Email address"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                disabled={loading}
                                style={{
                                    width: "100%",
                                    marginBottom: "0.5rem",
                                }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <input
                                type="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={(e) =>
                                    setForm({ ...form, password: e.target.value })
                                }
                                disabled={loading}
                                style={{
                                    width: "100%",
                                    marginBottom: "0.5rem",
                                }}
                            />
                        </motion.div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    padding: "0.75rem",
                                    background: theme.dangerLight,
                                    border: `1px solid rgba(255, 59, 48, 0.2)`,
                                    borderRadius: "12px",
                                    color: theme.danger,
                                    fontSize: "0.875rem",
                                    textAlign: "center",
                                }}
                            >
                                {error}
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button
                                type="submit"
                                loading={loading}
                                disabled={loading}
                                style={{
                                    width: "100%",
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                }}
                            >
                                {loading ? "Creating account..." : "Create Account"}
                            </Button>
                        </motion.div>
                    </form>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            textAlign: "center",
                            marginTop: "2rem",
                            paddingTop: "1.5rem",
                            borderTop: `1px solid ${theme.border}`,
                        }}
                    >
                        <Text variant="secondary" style={{ marginBottom: "0.5rem" }}>
                            Already have an account?
                        </Text>
                        <Link
                            to="/"
                            style={{
                                color: theme.accent,
                                textDecoration: "none",
                                fontWeight: "500",
                                transition: "color 0.2s ease",
                            }}
                            onMouseEnter={(e) => e.target.style.color = theme.accentSecondary}
                            onMouseLeave={(e) => e.target.style.color = theme.accent}
                        >
                            Sign in here
                        </Link>
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    );
};

export default Register;