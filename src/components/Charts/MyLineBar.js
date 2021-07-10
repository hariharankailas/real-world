/***********************************************************************************************
 * File : MyLineBar
 * Desc : Out of the box Line Bar chart from recharts js
 * Author: Hariharan Kailas
 * Date: 10-Jul-2021
 ***********************************************************************************************/
import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const MyLineBar = ({ performanceData }) => {
  return (
      <ResponsiveContainer width="100%" height={400}>
    <ComposedChart
      width={500}
      height={400}
      data={performanceData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="duration" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="duration" stroke="#ff7300" />
      </ComposedChart>
      </ResponsiveContainer>
  );
}

export default MyLineBar;