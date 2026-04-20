import { motion } from "framer-motion";

import { useExpenses } from "../hooks/useExpenses";
import { useAnalytics } from "../hooks/useAnalytics";
import { useInsights } from "../hooks/useInsights";

import Card from "../components/ui/Card";
import { Title, SectionTitle, Value } from "../components/ui/Typography";
import { theme } from "../styles/theme";

import { formatCurrency } from "../utils/formatters";

const Insights = () => {
    const { expenses, loading } = useExpenses();
    const safeExpenses = expenses || [];

    const { total, categoryData, monthlyData, topCategory } =
        useAnalytics(safeExpenses);

    const { behavior, anomalies, prediction, insights, patterns } =
        useInsights(safeExpenses);

    if (loading) {
        return (
            <div style={{ padding: "24px", opacity: 0.6 }}>
                <Card variant="light"><p style={{ color: theme.textPrimary }}>Loading insights...</p></Card>
                <Card variant="light"><p style={{ color: theme.textPrimary }}>Analyzing spending...</p></Card>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {}
            <Title variant="light">Insights</Title>

            {}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "16px",
                    marginBottom: "24px",
                }}
            >
                <Card variant="light">
                    <p style={{ color: theme.textSecondary }}>Total Spending</p>
                    <Value variant="light">{formatCurrency(total)}</Value>
                </Card>

                <Card variant="light">
                    <p style={{ color: theme.textSecondary }}>Top Category</p>
                    <Value variant="light">{topCategory || "N/A"}</Value>
                </Card>

                <Card variant="light">
                    <p style={{ color: theme.textSecondary }}>Transactions</p>
                    <Value variant="light">{safeExpenses.length}</Value>
                </Card>
            </div>

            {}
            <div style={{ marginBottom: "32px" }}>
                <SectionTitle variant="light">AI Insights</SectionTitle>

                {insights.length === 0 ? (
                    <Card variant="light"><p>No insights available</p></Card>
                ) : (
                    insights.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            style={{ marginBottom: "12px" }}
                        >
                            <Card
                                style={{
                                    border: `1px solid rgba(52, 199, 89, 0.2)`,
                                    background: theme.successLight,
                                    backdropFilter: theme.backdropLight,
                                }}
                                variant="light"
                            >
                                <p style={{ color: theme.textPrimary }}>{text}</p>
                            </Card>
                        </motion.div>
                    ))
                )}
            </div>

            {}
            <div style={{ marginBottom: "32px" }}>
                <SectionTitle variant="light">Behavior Patterns</SectionTitle>

                {patterns ? (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "16px",
                        }}
                    >
                        <Card variant="light">
                            <p style={{ color: theme.textSecondary }}>Weekend Ratio</p>
                            <Value variant="light">{patterns.weekendRatio.toFixed(1)}%</Value>
                        </Card>

                        <Card variant="light">
                            <p style={{ color: theme.textSecondary }}>Peak Day</p>
                            <Value variant="light">{patterns.highestDay}</Value>
                        </Card>

                        <Card variant="light">
                            <p style={{ color: theme.textSecondary }}>Spending Phase</p>
                            <Value variant="light">{patterns.phase}</Value>
                        </Card>

                        <Card variant="light">
                            <p style={{ color: theme.textSecondary }}>Consistency</p>
                            <Value variant="light">{patterns.consistency}</Value>
                        </Card>
                    </div>
                ) : (
                    <Card variant="light"><p>No pattern data available</p></Card>
                )}
            </div>

            {}
            <div style={{ marginBottom: "32px" }}>
                <SectionTitle variant="light">Category Analysis</SectionTitle>

                {categoryData.length === 0 ? (
                    <Card variant="light"><p>No data available</p></Card>
                ) : (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: "16px",
                        }}
                    >
                        {categoryData.map((cat) => (
                            <Card key={cat.name} variant="light">
                                <p style={{ color: theme.textSecondary }}>{cat.name}</p>
                                <Value variant="light">{formatCurrency(cat.value)}</Value>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            {}
            <div style={{ marginBottom: "32px" }}>
                <SectionTitle variant="light">Monthly Analysis</SectionTitle>

                {monthlyData.length === 0 ? (
                    <Card variant="light"><p>No data available</p></Card>
                ) : (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: "16px",
                        }}
                    >
                        {monthlyData.map((m) => (
                            <Card key={m.month} variant="light">
                                <p style={{ color: theme.textSecondary }}>{m.month}</p>
                                <Value variant="light">{formatCurrency(m.amount)}</Value>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            {}
            <div>
                <SectionTitle variant="light">Advanced Metrics</SectionTitle>

                <Card variant="light">
                    {behavior && (
                        <>
                            <p style={{ color: theme.textPrimary }}>Total: ₹{behavior.total}</p>
                            <p style={{ color: theme.textPrimary }}>Daily Avg: ₹{behavior.dailyAvg.toFixed(2)}</p>
                            <p style={{ color: theme.textPrimary }}>Trend: {behavior.trend}</p>
                            <p style={{ color: theme.textPrimary }}>Top Category: {behavior.dominantCategory}</p>
                        </>
                    )}

                    <p style={{ color: theme.textPrimary }}>
                        Projected Spend: ₹
                        {prediction ? prediction.toFixed(2) : 0}
                    </p>

                    <h4 style={{ marginTop: "12px", color: theme.textPrimary }}>Anomalies</h4>

                    {anomalies && anomalies.length === 0 ? (
                        <p style={{ color: theme.textPrimary }}>No anomalies detected</p>
                    ) : (
                        anomalies &&
                        anomalies.map((a, index) => (
                            <p key={index} style={{ color: theme.textPrimary }}>
                                {a.message} (₹{a.value})
                            </p>
                        ))
                    )}
                </Card>
            </div>
        </motion.div>
    );
};

export default Insights;