import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";
import { curveCardinal } from "d3-shape";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface DataItem {}

interface CategoryMonthlyIncomeCardProps<T> {
  data: T[];
  xAxisDataKey: string;
  yAxisDataKey: string;
  title: string;
}

const CardinalAreaChart = <T extends DataItem>({
  data,
  xAxisDataKey,
  yAxisDataKey,
  title,
}: CategoryMonthlyIncomeCardProps<T>): React.ReactElement => {
  return (
    <Card className="py-3">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey={xAxisDataKey}
              stroke="#fffff"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#fffff"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar dataKey={yAxisDataKey} fill="#fffff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { CardinalAreaChart };
