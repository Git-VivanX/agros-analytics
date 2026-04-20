export const getOverspendingAlert = (expenses) => {
    if (expenses.length < 5) return null;

    const now = new Date();

    const last7Days = expenses.filter((exp) => {
        const d = new Date(exp.date);
        return (now - d) / (1000 * 60 * 60 * 24) <= 7;
    });

    const previous = expenses.filter((exp) => {
        const d = new Date(exp.date);
        const days = (now - d) / (1000 * 60 * 60 * 24);
        return days > 7 && days <= 30;
    });

    const last7Total = last7Days.reduce((s, e) => s + e.amount, 0);
    const prevAvg =
        previous.reduce((s, e) => s + e.amount, 0) / (previous.length || 1);

    if (last7Total > prevAvg * 2) {
        return "⚠️ You are spending significantly more than usual this week.";
    }

    return null;
};

export const getCategoryInsight = (categoryData) => {
    const total = categoryData.reduce((s, c) => s + c.value, 0);

    let dominant = null;

    categoryData.forEach((c) => {
        if (c.value / total > 0.4) {
            dominant = c.name;
        }
    });

    if (dominant) {
        return `💡 ${dominant} takes a large portion of your spending.`;
    }

    return null;
};

export const getSpendingTrend = (monthlyData) => {
    if (monthlyData.length < 2) return null;

    const last = monthlyData[monthlyData.length - 1].amount;
    const prev = monthlyData[monthlyData.length - 2].amount;

    if (last > prev * 1.3) {
        return "📈 Your spending increased sharply this month.";
    }

    return null;
};