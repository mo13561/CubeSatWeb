import React from 'react';
import { Cont } from './GraphsElements';
import { LineChart, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Monday',
    uv: 4000,
    temperature: 2400,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    uv: 3000,
    temperature: 1398,
    amt: 2210,
  },
  {
    name: 'Wednesday',
    uv: 2000,
    temperature: 9800,
    amt: 2290,
  },
  {
    name: 'Thursday',
    uv: 2780,
    temperature: 3908,
    amt: 2000,
  },
  {
    name: 'Friday',
    uv: 1890,
    temperature: 4800,
    amt: 2181,
  },
  {
    name: 'Saturday',
    uv: 2390,
    temperature: 3800,
    amt: 2500,
  },
  {
    name: 'Sunday',
    uv: 3490,
    temperature: 4300,
    amt: 2100,
  },
];

const BasicChart = () => {
    return (
            <ResponsiveContainer width="99%" aspect={2.5}>
            <LineChart 
                width={1000}
                height={500}
                data={data}
                margin={{
                    top: 30,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#c23124" />
            </LineChart>
            </ResponsiveContainer>
    );
}
const GraphsSection = () => {
    return (
        <>
        <Cont>
            <h1>Graphs Page wow</h1>
        </Cont>
        <BasicChart />
        </>
    )
}

export default GraphsSection;
