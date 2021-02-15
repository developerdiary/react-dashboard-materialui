import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import Title from './Title';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];


export default function PChart() {

  return (
    <React.Fragment>
      <Title>Pie chart</Title>      
      <ResponsiveContainer>

      <PieChart width={100} height={100}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx={100}
          cy={80}
          outerRadius={50}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>

      </ResponsiveContainer>
    </React.Fragment>
  );
}