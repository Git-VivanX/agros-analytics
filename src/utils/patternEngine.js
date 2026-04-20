const getDay = (date) => new Date(date).getDay(); 
const getDate = (date) => new Date(date).getDate();

export const analyzePatterns = (expenses) => {
    if (!expenses || expenses.length === 0) return null;

    let weekendSpend = 0;
    let weekdaySpend = 0;

    const dayTotals = Array(7).fill(0);
    const monthlyBuckets = {
        early: 0,   
        mid: 0,     
        late: 0,    
    };

    const values = [];

    expenses.forEach((e) => {
        const day = getDay(e.date);
        const date = getDate(e.date);

        values.push(e.amount);

        if (day === 0 || day === 6) {
            weekendSpend += e.amount;
        } else {
            weekdaySpend += e.amount;
        }

        dayTotals[day] += e.amount;

        if (date <= 10) monthlyBuckets.early += e.amount;
        else if (date <= 20) monthlyBuckets.mid += e.amount;
        else monthlyBuckets.late += e.amount;
    });

    const weekendRatio =
        weekdaySpend === 0 ? 0 : (weekendSpend / weekdaySpend) * 100;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const maxDayIndex = dayTotals.indexOf(Math.max(...dayTotals));
    const highestDay = days[maxDayIndex];

    const phase = Object.keys(monthlyBuckets).reduce((a, b) =>
        monthlyBuckets[a] > monthlyBuckets[b] ? a : b
    );

    const mean = values.reduce((a, b) => a + b, 0) / values.length;

    const variance =
        values.reduce((sum, val) => sum + (val - mean) ** 2, 0) / values.length;

    const stdDev = Math.sqrt(variance);

    let consistency = "stable";
    if (stdDev > mean * 0.75) consistency = "highly variable";
    else if (stdDev > mean * 0.4) consistency = "moderate";

    return {
        weekendRatio,
        highestDay,
        phase,
        consistency,
    };
};