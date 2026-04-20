import { db } from "./firebase";
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
    orderBy,
    serverTimestamp,
} from "firebase/firestore";

const expensesRef = collection(db, "expenses");

export const addExpense = async (expense) => {
    const docRef = await addDoc(expensesRef, {
        ...expense,
        createdAt: serverTimestamp(),
    });
    return { id: docRef.id, ...expense };
};

export const getUserExpenses = async (userId) => {
    const q = query(
        expensesRef,
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

export const updateExpense = async (id, updatedData) => {
    const docRef = doc(db, "expenses", id);
    await updateDoc(docRef, updatedData);
};

export const deleteExpense = async (id) => {
    const docRef = doc(db, "expenses", id);
    await deleteDoc(docRef);
};