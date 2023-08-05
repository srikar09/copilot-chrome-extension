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

/**
 * Interface for the data items
 */
interface DataItem {}

/**
 * Props for the CategoryMonthlyIncomeCard component
 * @template T - Type of the data items
 * @property data - Data array
 * @property xAxisDataKey - Key of the X axis data in data objects
 * @property yAxisDataKey - Key of the Y axis data in data objects
 * @property title - Title of the card
 */
interface CategoryMonthlyIncomeCardProps<T> {
  data: T[];
  xAxisDataKey: string;
  yAxisDataKey: string;
  title: string;
}

/**
 * A bar chart component that is responsive and shows data on a bar chart
 * @template T - Type of the data items which extends DataItem
 * @param props - Props for the component
 * @returns ReactElement
 */
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
