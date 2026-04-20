import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExpenses } from "../hooks/useExpenses";

import Card from "../components/ui/Card";
import { Title } from "../components/ui/Typography";
import Button from "../components/ui/Button";
import { theme } from "../styles/theme";

const AddExpense = () => {
    const navigate = useNavigate();
    const { addExpense } = useExpenses();

    const [form, setForm] = useState({
        amount: "",
        category: "",
        date: new Date().toISOString().split('T')[0], 
        note: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addExpense({
                ...form,
                amount: Number(form.amount),
            });
            navigate("/dashboard");
        } catch (error) {
            console.error("Error adding expense:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
            <Title variant="light" style={{ marginBottom: "2rem", textAlign: "center" }}>
                Add New Expense
            </Title>

            <Card variant="light" style={{ padding: "2rem" }}>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem"
                    }}
                >
                    <div>
                        <label style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            color: theme.textSecondary,
                            fontSize: "0.875rem",
                            fontWeight: "500"
                        }}>
                            Amount (₹)
                        </label>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={form.amount}
                            onChange={(e) =>
                                setForm({ ...form, amount: e.target.value })
                            }
                            style={{
                                width: "100%",
                            }}
                            required
                            min="0"
                            step="0.01"
                        />
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            color: theme.textSecondary,
                            fontSize: "0.875rem",
                            fontWeight: "500"
                        }}>
                            Category
                        </label>
                        <select
                            value={form.category}
                            onChange={(e) =>
                                setForm({ ...form, category: e.target.value })
                            }
                            style={{
                                width: "100%",
                                cursor: "pointer"
                            }}
                            required
                        >
                            <option value="" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>
                                Select category
                            </option>
                            <option value="Food" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>🍽️ Food</option>
                            <option value="Transportation" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>🚗 Transportation</option>
                            <option value="Entertainment" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>🎬 Entertainment</option>
                            <option value="Shopping" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>🛍️ Shopping</option>
                            <option value="Bills" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>💡 Bills</option>
                            <option value="Healthcare" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>🏥 Healthcare</option>
                            <option value="Education" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>📚 Education</option>
                            <option value="Other" style={{ backgroundColor: theme.surface, color: theme.textPrimary }}>📝 Other</option>
                        </select>
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            color: theme.textSecondary,
                            fontSize: "0.875rem",
                            fontWeight: "500"
                        }}>
                            Date
                        </label>
                        <input
                            type="date"
                            value={form.date}
                            onChange={(e) =>
                                setForm({ ...form, date: e.target.value })
                            }
                            style={{
                                width: "100%",
                                cursor: "pointer"
                            }}
                            required
                        />
                    </div>

                    <div>
                        <label style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            color: theme.textSecondary,
                            fontSize: "0.875rem",
                            fontWeight: "500"
                        }}>
                            Note (Optional)
                        </label>
                        <textarea
                            placeholder="Add a note about this expense..."
                            value={form.note}
                            onChange={(e) =>
                                setForm({ ...form, note: e.target.value })
                            }
                            rows={3}
                            style={{
                                width: "100%",
                                resize: "vertical",
                            }}
                        />
                    </div>

                    <div style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1rem"
                    }}>
                        <Button
                            type="submit"
                            loading={loading}
                            disabled={loading}
                            style={{
                                flex: 1,
                            }}
                        >
                            {loading ? "Adding..." : "Add Expense"}
                        </Button>

                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => navigate("/dashboard")}
                            style={{
                                flex: 1,
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddExpense;