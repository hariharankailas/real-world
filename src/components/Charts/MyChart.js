/***********************************************************************************************
 * File : MyChart
 * Desc : Out of the box Line chart from recharts js
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const MyChart = ({ performanceData }) => {
  return (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      width={500}
      height={300}
      data={performanceData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      /> */}
      <Line type="monotone" dataKey="duration" stroke="#82ca9d" />
    </LineChart>
</ResponsiveContainer>
  );
 }

export default MyChart;

