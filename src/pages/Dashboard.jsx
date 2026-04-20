import { motion } from "framer-motion";
import { useExpenses } from "../hooks/useExpenses";
import { useAnalytics } from "../hooks/useAnalytics";
import { useInsights } from "../hooks/useInsights";

import Card from "../components/ui/Card";
import { Title, SectionTitle, Value, Text } from "../components/ui/Typography";
import { theme } from "../styles/theme";

import ExpenseCard from "../components/ExpenseCard";
import CategoryPieChart from "../components/CategoryPieChart";
import MonthlyLineChart from "../components/MonthlyLineChart";

const Dashboard = () => {
    const { expenses, loading, deleteExpense } = useExpenses();
    const safeExpenses = expenses || [];

    const { total, categoryData, topCategory, monthlyData } = useAnalytics(safeExpenses);
    const { insights } = useInsights(safeExpenses);

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "60vh",
                }}
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: "40px",
                        height: "40px",
                        border: `3px solid ${theme.border}`,
                        borderTop: `3px solid ${theme.accent}`,
                        borderRadius: "50%",
                    }}
                />
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                padding: "2rem",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            <Title variant="light" style={{ marginBottom: "3rem", textAlign: "left" }}>
                Dashboard
            </Title>

            {}
            <motion.div
                variants={itemVariants}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2rem",
                    marginBottom: "4rem",
                }}
            >
                <Card hover={true} variant="light">
                    <div style={{ marginBottom: "1rem" }}>
                        <Text variant="secondary" colorVariant="light" style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                            Total Spending
                        </Text>
                        <Value variant="light" style={{ fontSize: "2.5rem" }}>
                            ₹{total.toLocaleString()}
                        </Value>
                    </div>
                    <div
                        style={{
                            height: "4px",
                            background: `linear-gradient(90deg, ${theme.accent} 0%, ${theme.accentSecondary} 100%)`,
                            borderRadius: "2px",
                        }}
                    />
                </Card>

                <Card hover={true} variant="light">
                    <div style={{ marginBottom: "1rem" }}>
                        <Text variant="secondary" colorVariant="light" style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                            Top Category
                        </Text>
                        <Value variant="light" style={{ fontSize: "2rem" }}>
                            {topCategory || "N/A"}
                        </Value>
                    </div>
                    <div
                        style={{
                            height: "4px",
                            background: `linear-gradient(90deg, ${theme.success} 0%, #34c759 100%)`,
                            borderRadius: "2px",
                        }}
                    />
                </Card>

                <Card hover={true} variant="light">
                    <div style={{ marginBottom: "1rem" }}>
                        <Text variant="secondary" colorVariant="light" style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                            Transactions
                        </Text>
                        <Value variant="light" style={{ fontSize: "2.5rem" }}>
                            {safeExpenses.length}
                        </Value>
                    </div>
                    <div
                        style={{
                            height: "4px",
                            background: `linear-gradient(90deg, ${theme.textSecondary} 0%, ${theme.textTertiary} 100%)`,
                            borderRadius: "2px",
                        }}
                    />
                </Card>
            </motion.div>

            {}
            <motion.div
                variants={itemVariants}
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gap: "2rem",
                    marginBottom: "4rem",
                }}
            >
                <Card variant="light" style={{ padding: "2rem" }}>
                    <SectionTitle variant="light" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                        Spending by Category
                    </SectionTitle>
                    {categoryData.length > 0 ? (
                        <CategoryPieChart data={categoryData} />
                    ) : (
                        <div style={{ textAlign: "center", padding: "2rem", color: theme.textSecondary }}>
                            No data to display
                        </div>
                    )}
                </Card>

                <Card variant="light" style={{ padding: "2rem" }}>
                    <SectionTitle variant="light" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                        Monthly Trend
                    </SectionTitle>
                    {monthlyData.length > 0 ? (
                        <MonthlyLineChart data={monthlyData} />
                    ) : (
                        <div style={{ textAlign: "center", padding: "2rem", color: theme.textSecondary }}>
                            No data to display
                        </div>
                    )}
                </Card>
            </motion.div>

            {}
            <motion.div variants={itemVariants}>
                <SectionTitle variant="light" style={{ marginBottom: "2rem" }}>
                    Quick Insights
                </SectionTitle>

                <div style={{ marginBottom: "4rem" }}>
                    {insights.slice(0, 2).map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            style={{ marginBottom: "1rem" }}
                        >
                            <Card
                                style={{
                                    border: `1px solid rgba(52, 199, 89, 0.2)`,
                                    background: theme.successLight,
                                    backdropFilter: theme.backdropLight,
                                }}
                                hover={true}
                                variant="light"
                            >
                                <Text colorVariant="light" style={{ color: theme.textPrimary, lineHeight: "1.6" }}>
                                    {text}
                                </Text>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {}
            <motion.div variants={itemVariants}>
                <SectionTitle variant="light" style={{ marginBottom: "2rem" }}>
                    Recent Expenses
                </SectionTitle>

                {safeExpenses.length === 0 ? (
                    <Card style={{ textAlign: "center", padding: "3rem" }} variant="light">
                        <Text variant="secondary" colorVariant="light" style={{ fontSize: "1.125rem" }}>
                            No expenses yet
                        </Text>
                        <Text variant="caption" colorVariant="light" style={{ marginTop: "0.5rem" }}>
                            Start by adding your first expense
                        </Text>
                    </Card>
                ) : (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {safeExpenses.slice(0, 6).map((expense, index) => (
                            <motion.div
                                key={expense.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 + 0.4 }}
                            >
                                <Card hover={false} variant="light">
                                    <ExpenseCard expense={expense} onDelete={deleteExpense} />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Dashboard;