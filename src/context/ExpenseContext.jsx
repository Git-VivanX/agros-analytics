import { useEffect, useState, useMemo, useCallback } from "react";
import {
    addExpense,
    getUserExpenses,
    updateExpense,
    deleteExpense,
} from "../services/expenseService";
import { useAuth } from "../hooks/useAuth";
import { ExpenseContext } from "./ExpenseContextState";

export const ExpenseProvider = ({ children }) => {
    const { user } = useAuth();
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const fetchExpenses = async () => {
            setLoading(true);
            const data = await getUserExpenses(user.uid);
            setExpenses(data);
            setLoading(false);
        };

        fetchExpenses();
    }, [user]);

    const handleAddExpense = useCallback(async (expense) => {
        if (!user) return;
        const newExpense = await addExpense({ ...expense, userId: user.uid });
        setExpenses((prev) => [newExpense, ...prev]);
    }, [user]);

    const handleUpdateExpense = useCallback(async (id, updatedData) => {
        await updateExpense(id, updatedData);
        setExpenses((prev) =>
            prev.map((exp) => (exp.id === id ? { ...exp, ...updatedData } : exp))
        );
    }, []);

    const handleDeleteExpense = useCallback(async (id) => {
        await deleteExpense(id);
        setExpenses((prev) => prev.filter((exp) => exp.id !== id));
    }, []);

    const contextValue = useMemo(() => ({
        expenses,
        loading,
        addExpense: handleAddExpense,
        updateExpense: handleUpdateExpense,
        deleteExpense: handleDeleteExpense,
    }), [expenses, loading, handleAddExpense, handleUpdateExpense, handleDeleteExpense]);

    return (
        <ExpenseContext.Provider value={contextValue}>
            {children}
        </ExpenseContext.Provider>
    );
};