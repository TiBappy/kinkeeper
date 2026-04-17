"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "On Track", value: 12 },
  { name: "Need Attention", value: 4 },
  { name: "Overdue", value: 2 },
];

// ✅ Your original style colors
const COLORS = ["#244D3F", "#FF8042", "#FFBB28"];

export default function MyPieChart() {
  return (
    <div className="w-full h-[350px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}