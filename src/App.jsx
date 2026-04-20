import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddExpense = lazy(() => import("./pages/AddExpense"));
const EditExpense = lazy(() => import("./pages/EditExpense"));
const Insights = lazy(() => import("./pages/Insights"));

import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import { theme } from "./styles/theme";

const PageLoader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: theme.bg }}>
        <div style={{ width: '40px', height: '40px', border: `3px solid ${theme.border}`, borderTop: `3px solid ${theme.accent}`, borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>

        {}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {}
        <Route element={<ProtectedRoute />}>

          <Route
            path="/dashboard"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />

          <Route
            path="/add"
            element={
              <AppLayout>
                <AddExpense />
              </AppLayout>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <AppLayout>
                <EditExpense />
              </AppLayout>
            }
          />

          <Route
            path="/insights"
            element={
              <AppLayout>
                <Insights />
              </AppLayout>
            }
          />

        </Route>

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;