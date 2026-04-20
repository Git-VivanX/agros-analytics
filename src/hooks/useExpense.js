import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContextState";

export const useExpense = () => useContext(ExpenseContext);
