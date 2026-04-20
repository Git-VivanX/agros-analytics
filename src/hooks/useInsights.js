import { useMemo } from "react";
import {
    analyzeSpendingBehavior,
    detectAnomalies,
    predictMonthlySpend,
} from "../utils/intelligenceEngine";

import { generateInsights } from "../utils/insightGenerator";
import { analyzePatterns } from "../utils/patternEngine";

export const useInsights = (expenses = []) => {
    return useMemo(() => {

        const behavior = analyzeSpendingBehavior(expenses);
        const anomalies = detectAnomalies(expenses);
        const prediction = predictMonthlySpend(expenses);
        const patterns = analyzePatterns(expenses);

        const insights = generateInsights({
            behavior,
            anomalies,
            prediction,
            patterns,
        });

        return {
            behavior,
            anomalies,
            prediction,
            insights,
            patterns,
        };
    }, [expenses]);
};