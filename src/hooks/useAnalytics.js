import { useMemo } from "react";
import { useExpense } from "./useExpense";
import {
    getTotalExpenses,
    getCategoryBreakdown,
    getTopCategory,
    getMonthlyExpenses,
    formatCategoryData,
    formatMonthlyData,
} from "../utils/analytics";

export const useAnalytics = () => {
    const { expenses } = useExpense();

    const total = useMemo(() => getTotalExpenses(expenses), [expenses]);

    const categoryDataRaw = useMemo(
        () => getCategoryBreakdown(expenses),
        [expenses]
    );

    const categoryData = useMemo(
        () => formatCategoryData(categoryDataRaw),
        [categoryDataRaw]
    );

    const topCategory = useMemo(
        () => getTopCategory(expenses),
        [expenses]
    );

    const monthlyRaw = useMemo(
        () => getMonthlyExpenses(expenses),
        [expenses]
    );

    const monthlyData = useMemo(
        () => formatMonthlyData(monthlyRaw),
        [monthlyRaw]
    );

    return {
        total,
        categoryData,
        topCategory,
        monthlyData,
    };
};