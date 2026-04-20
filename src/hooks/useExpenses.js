import { useExpense } from "./useExpense";

export const useExpenses = () => {
    const {
        expenses,
        loading,
        addExpense,
        updateExpense,
        deleteExpense,
    } = useExpense();

    return {
        expenses,
        loading,
        addExpense,
        updateExpense,
        deleteExpense,
    };
};