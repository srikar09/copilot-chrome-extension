import { Card, Title, DonutChart } from "@tremor/react";
import { ResponsiveContainer, Pie, PieChart } from "recharts";
import { cn } from "src/lib/utils";

// const valueFormatter = (number: number) =>
//   `$ ${Intl.NumberFormat("us").format(number).toString()}`;

interface PieChartProps {
  className?: string;
  data: any[];
  title: string;
  datakey: string;
  valueFormatter: (number: number) => string;
  showAnimation?: boolean;
  animationDuration?: number;
  noDataText?: string;
  showLabel?: boolean;
  label?: string;
  variant: "pie" | "donut";
}

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const ResponsivePieChart: React.FC<PieChartProps> = (props) => {
  const { className, title } = props;

  return (
    <PieChart>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  );
};

export { ResponsivePieChart };
