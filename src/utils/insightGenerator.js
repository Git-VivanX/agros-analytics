export const generateInsights = ({
    behavior,
    anomalies,
    prediction,
    patterns, 
}) => {
    const insights = [];

    if (!behavior) return insights;

    if (behavior.trend === "increasing") {
        insights.push(
            "Your spending is increasing over time, indicating a rising expense pattern."
        );
    } else if (behavior.trend === "decreasing") {
        insights.push(
            "Your spending is decreasing, showing improved control over expenses."
        );
    } else {
        insights.push(
            "Your spending is relatively stable with no major fluctuations."
        );
    }

    insights.push(
        `${behavior.dominantCategory} is your highest spending category, contributing significantly to your total expenses.`
    );

    if (prediction) {
        insights.push(
            `At your current pace, your projected monthly spending is around ₹${prediction.toFixed(0)}.`
        );
    }

    if (anomalies && anomalies.length > 0) {
        anomalies.forEach((a) => {
            insights.push(
                `${a.message} (₹${a.value}) which deviates from your usual pattern.`
            );
        });
    } else {
        insights.push("No unusual spending patterns detected.");
    }

    if (patterns) {

        if (patterns.weekendRatio > 120) {
            insights.push(
                "You spend significantly more on weekends compared to weekdays."
            );
        } else if (patterns.weekendRatio < 80) {
            insights.push(
                "Your spending is lower on weekends compared to weekdays."
            );
        }

        insights.push(
            `Your highest spending typically occurs on ${patterns.highestDay}.`
        );

        if (patterns.phase === "late") {
            insights.push(
                "Most of your spending happens towards the end of the month."
            );
        } else if (patterns.phase === "early") {
            insights.push(
                "You tend to spend more at the beginning of the month."
            );
        }

        if (patterns.consistency === "stable") {
            insights.push(
                "Your spending behavior is consistent, indicating disciplined financial habits."
            );
        } else if (patterns.consistency === "moderate") {
            insights.push(
                "Your spending shows moderate variation, suggesting occasional spikes."
            );
        } else {
            insights.push(
                "Your spending is highly variable, indicating irregular or impulsive patterns."
            );
        }
    }

    return insights;
};