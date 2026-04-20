export const analyzeSpendingBehavior = (expenses) => {
    if (!expenses || expenses.length === 0) return null;;

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    const days = new Set(expenses.map(e => e.date)).size;
    const dailyAvg = total / days;

    const sorted = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));

    let trend = "stable";
    if (sorted.length >= 2) {
        const firstHalf = sorted.slice(0, Math.floor(sorted.length / 2));
        const secondHalf = sorted.slice(Math.floor(sorted.length / 2));

        const avg1 = firstHalf.reduce((s, e) => s + e.amount, 0) / firstHalf.length;
        const avg2 = secondHalf.reduce((s, e) => s + e.amount, 0) / secondHalf.length;

        if (avg2 > avg1 * 1.2) trend = "increasing";
        else if (avg2 < avg1 * 0.8) trend = "decreasing";
    }

    const categoryMap = {};
    expenses.forEach(e => {
        categoryMap[e.category] = (categoryMap[e.category] || 0) + e.amount;
    });

    const dominantCategory = Object.keys(categoryMap).reduce((a, b) =>
        categoryMap[a] > categoryMap[b] ? a : b
    );

    return {
        total,
        dailyAvg,
        trend,
        dominantCategory,
    };
};

export const detectAnomalies = (expenses) => {
    const anomalies = [];

    const categoryStats = {};

    expenses.forEach(e => {
        if (!categoryStats[e.category]) {
            categoryStats[e.category] = [];
        }
        categoryStats[e.category].push(e.amount);
    });

    Object.keys(categoryStats).forEach(category => {
        const values = categoryStats[category];
        const avg = values.reduce((a, b) => a + b, 0) / values.length;

        values.forEach(value => {
            if (value > avg * 2) {
                anomalies.push({
                    category,
                    value,
                    message: `Unusual high spending in ${category}`,
                });
            }
        });
    });

    return anomalies;
};

export const predictMonthlySpend = (expenses) => {
    if (!expenses || expenses.length === 0) return null;;

    const today = new Date();
    const currentDay = today.getDate();

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    return (total / currentDay) * 30;
};