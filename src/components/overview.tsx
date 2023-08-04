import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export const Overview: React.FC<{
  className?: string;
  data: any[];
  dateKey: string;
}> = (props) => {
  const { className, data, dateKey } = props;
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={dateKey} fill="#000000" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
