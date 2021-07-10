/***********************************************************************************************
 * File : MyAreaChart
 * Desc : Out of the box Area chart from recharts js
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import React from "react";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const MyAreaChart = ({ performanceData }) => {
  return (
          <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      width={500}
      height={400}
      data={performanceData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="duration" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </ResponsiveContainer>
  );
 }

export default MyAreaChart;
