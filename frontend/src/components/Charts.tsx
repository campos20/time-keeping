import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { TimeEntryDto } from "../model/TimeEntryDto";

interface Props {
  entries: TimeEntryDto[];
}

const COLORS = ["#FF8042", "#00C49F", "#FFBB28", "#0088FE"];

export const Charts = ({ entries }: Props) => {
  const groupedByProject = entries.reduce((acc, entry) => {
    const project = entry.project;
    const duration = entry.duration;
    if (!acc[project]) {
      acc[project] = 0;
    }
    acc[project] += duration;
    return acc;
  }, {} as Record<string, number>);

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={Object.entries(groupedByProject).map(([name, value], idx) => ({
          name,
          value,
          fill: COLORS[idx % COLORS.length],
        }))}
        outerRadius={120}
        cx="50%"
        cy="50%"
        dataKey="value"
        nameKey="name"
      ></Pie>
    </PieChart>
  );
};
