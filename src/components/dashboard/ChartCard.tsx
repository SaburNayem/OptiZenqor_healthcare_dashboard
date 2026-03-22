"use client";

import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Datum = Record<string, string | number>;

export function ChartCard({
  title,
  subtitle,
  data,
  xKey,
  yKey,
  type = "line",
}: {
  title: string;
  subtitle: string;
  data: Datum[];
  xKey: string;
  yKey: string;
  type?: "line" | "bar" | "pie";
}) {
  const [mounted, setMounted] = useState(false);
  const colors = ["#2E74A3", "#4EA07A", "#7AB7D8", "#9CD2B3", "#EBC66D"];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="h-72">
        {!mounted ? <div className="h-full w-full animate-pulse rounded-xl bg-[var(--surface-secondary)]" /> : null}
        {mounted ? (
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d4e2ea" />
              <XAxis dataKey={xKey} stroke="#5f7b8f" />
              <YAxis stroke="#5f7b8f" />
              <Tooltip />
              <Bar dataKey={yKey} fill="#2E74A3" radius={[8, 8, 0, 0]} />
            </BarChart>
          ) : type === "pie" ? (
            <PieChart>
              <Tooltip />
              <Pie data={data} dataKey={yKey} nameKey={xKey} outerRadius={95} innerRadius={58}>
                {data.map((_, i) => (
                  <Cell key={i} fill={colors[i % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d4e2ea" />
              <XAxis dataKey={xKey} stroke="#5f7b8f" />
              <YAxis stroke="#5f7b8f" />
              <Tooltip />
              <Line type="monotone" dataKey={yKey} stroke="#2E74A3" strokeWidth={3} dot={{ fill: "#2E74A3" }} />
            </LineChart>
          )}
        </ResponsiveContainer>
        ) : null}
      </CardContent>
    </Card>
  );
}
