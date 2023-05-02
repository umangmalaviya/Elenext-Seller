import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "../Styles/Demo.css"

function Demo() {
  const data = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
    { name: 'Jun', uv: 100 },
    { name: 'Jul', uv: 3490 },
    { name: 'Aug', uv: 4000 },
    { name: 'Sep', uv: 3000 },
    { name: 'Oct', uv: 2000 },
    { name: 'Nov', uv: 2780 },
    { name: 'Dec', uv: 100 },
  ];

  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      className="chart"
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} className="line"/>
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} className="line"/>
      <YAxis dataKey="uv" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
    </LineChart>
  );
}

export default Demo;