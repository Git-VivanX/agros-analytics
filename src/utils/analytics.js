export const getTotalExpenses = (expenses) => {
    return expenses.reduce((sum, exp) => sum + exp.amount, 0);
};

export const getCategoryBreakdown = (expenses) => {
    const breakdown = {};

    expenses.forEach((exp) => {
        if (!breakdown[exp.category]) {
            breakdown[exp.category] = 0;
        }
        breakdown[exp.category] += exp.amount;
    });

    return breakdown;
};

export const getTopCategory = (expenses) => {
    const breakdown = getCategoryBreakdown(expenses);

    let topCategory = null;
    let max = 0;

    for (const category in breakdown) {
        if (breakdown[category] > max) {
            max = breakdown[category];
            topCategory = category;
        }
    }

    return topCategory;
};

export const getMonthlyExpenses = (expenses) => {
    const monthly = {};

    expenses.forEach((exp) => {
        const month = new Date(exp.date).toLocaleString("default", {
            month: "short",
            year: "numeric",
        });

        if (!monthly[month]) {
            monthly[month] = 0;
        }

        monthly[month] += exp.amount;
    });

    return monthly;
};

export const formatCategoryData = (categoryData) => {
    return Object.entries(categoryData).map(([name, value]) => ({
        name,
        value,
    }));
};

export const formatMonthlyData = (monthlyData) => {
    return Object.entries(monthlyData).map(([month, amount]) => ({
        month,
        amount,
    }));
};