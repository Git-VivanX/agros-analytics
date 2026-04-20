import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts";

const COLORS = ["#0071e3", "#34c759", "#ff9500", "#ff3b30", "#af52de"];

const CategoryPieChart = ({ data }) => {
    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
            >
                {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default CategoryPieChart;