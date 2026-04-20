import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const MonthlyLineChart = ({ data }) => {
    return (
        <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis dataKey="month" stroke="#86868b" />
            <YAxis stroke="#86868b" />
            <Tooltip contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(20px)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.05)" }} />
            <Line type="monotone" dataKey="amount" stroke="#0071e3" strokeWidth={3} dot={{ fill: '#0071e3', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, fill: '#0071e3', stroke: '#ffffff', strokeWidth: 2 }} />
        </LineChart>
    );
};

export default MonthlyLineChart;