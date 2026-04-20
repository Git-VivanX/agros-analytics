import { useMemo } from "react";
import {
    analyzeSpendingBehavior,
    detectAnomalies,
    predictMonthlySpend,
} from "../utils/intelligenceEngine";

export const useIntelligence = (expenses) => {
    return useMemo(() => {
        return {
            behavior: analyzeSpendingBehavior(expenses),
            anomalies: detectAnomalies(expenses),
            prediction: predictMonthlySpend(expenses),
        };
    }, [expenses]);
};