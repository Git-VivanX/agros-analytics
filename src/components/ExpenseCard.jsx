import { useNavigate } from "react-router-dom";
import { formatCurrency, formatDate } from "../utils/formatters";
import { theme } from "../styles/theme";
import { memo } from "react";

const ExpenseCard = memo(({ expense, onDelete }) => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                border: `1px solid ${theme.borderDark}`,
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
            }}
        >
            {}
            <div>
                <h3 style={{ margin: 0, color: theme.textPrimary }}>
                    {formatCurrency(expense.amount)}
                </h3>

                <p style={{ margin: "4px 0", color: theme.textPrimary }}>{expense.category}</p>
                <p style={{ margin: "4px 0", color: theme.textSecondary }}>
                    {formatDate(expense.date)}
                </p>

                {expense.note && (
                    <p style={{ margin: "4px 0", fontSize: "14px", color: theme.textSecondary }}>
                        {expense.note}
                    </p>
                )}
            </div>

            {}
            <div>
                <button
                    onClick={() => onDelete(expense.id)}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Delete
                </button>

                <button
                    onClick={() => navigate(`/edit/${expense.id}`)}
                    style={{
                        padding: "0.5rem",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                    }}
                >
                    Edit
                </button>
            </div>
        </div>
    );
});

export default ExpenseCard;