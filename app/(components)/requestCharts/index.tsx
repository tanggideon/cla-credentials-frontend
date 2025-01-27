"use client"

import React from "react";
import { Ellipsis } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "January",
    Requests: 2400,
    amt: 2400,
  },
  {
    name: "February",
    Requests: 1398,
    amt: 2210,
  },
  {
    name: "March",
    Requests: 9800,
    amt: 2290,
  },
  {
    name: "April",
    Requests: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Requests: 3800,
    amt: 2500,
  },
  {
    name: "June",
    Requests: 4300,
    amt: 2100,
  },
];

const RequestCharts = () => {
  return (
    <div className="bg-white py-5 h-full rounded-md">
      <div className="flex items-center justify-between p-3 h-[10%]">
        <h1 className="text-lg font-semibold text-gray-700">Request Summary</h1>
        <Ellipsis className="w-10 h-10 text-green-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500 p-2" />
      </div>
      <div className="w-full h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Requests" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RequestCharts;
