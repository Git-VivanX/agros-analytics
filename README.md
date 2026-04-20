# 📊 Agros Analytics

**Agros Analytics** is a modern, premium, and intelligent expense tracking application designed to help users visualize their financial habits. Built with a sleek, Apple-inspired aesthetic, the platform goes beyond simple logging by offering predictive AI-driven insights, anomaly detection, and beautiful interactive data visualizations.

---

## ✨ Key Features

- **Intelligent Financial Insights**: Automatically analyzes your spending behavior to predict your monthly spend, detect anomalies (like unusual weekend spikes), and summarize your habits.
- **Interactive Visualizations**: Beautiful, responsive charts including Category Breakdown (Pie Chart) and Monthly Trends (Line Chart).
- **Premium UI/UX**: Designed with a state-of-the-art "Apple-like" aesthetic featuring soft glassmorphism, fluid spring animations, and a highly accessible layout.
- **Full CRUD Functionality**: Easily add, edit, categorize, and delete your daily expenses.
- **Secure Authentication**: End-to-end user authentication and persistent sessions.
- **Highly Optimized**: Features advanced React code-splitting and component memoization for lightning-fast performance and minimal initial load times.

---

## 🛠️ Technology Stack

This project was built using modern web development standards and best practices:

### Core
- **[React 18](https://react.dev/)**: For building the interactive user interface.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for ultra-fast compilation and optimized production builds.
- **[React Router DOM](https://reactrouter.com/)**: For seamless, lazy-loaded client-side routing.

### UI & Animations
- **Vanilla CSS & Theme Tokens**: A centralized JavaScript theme system (`theme.js`) combined with global CSS for ultimate control over the design system without heavy frameworks.
- **[Framer Motion](https://www.framer.com/motion/)**: Powering the smooth, spring-based micro-interactions and page transitions.
- **[Recharts](https://recharts.org/)**: For rendering responsive, animated SVG charts.

### Backend & Database
- **[Firebase Authentication](https://firebase.google.com/products/auth)**: Handling secure user registration, login, and session persistence.
- **[Cloud Firestore](https://firebase.google.com/products/firestore)**: A NoSQL cloud database storing users' expenses with real-time capabilities.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd agros-analytics
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Build for Production
To test the highly-optimized, code-split production build:
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

- `/src/components` - Reusable UI components (Buttons, Cards, Charts) wrapped in `React.memo` for performance.
- `/src/context` - Global state management for User Sessions and Expense Data using memoized Context Providers.
- `/src/hooks` - Custom React hooks for analytics and AI insight generation.
- `/src/pages` - Lazy-loaded route components (Dashboard, AddExpense, Login, etc.).
- `/src/services` - Firebase configuration and Firestore database service functions.
- `/src/utils` - Helper functions for data formatting, mathematical analytics, and pattern detection.

---

*Designed and developed with a focus on clean architecture, performance, and pixel-perfect aesthetics.*
