import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './composedchart.scss';

const data = [
    {
      name: "Sun",
      economic: 8425,
      clothes: 2489,
      electronic: 8900,
    },
    {
      name: "Mon",
      economic: 4563,
      clothes: 8941,
      electronic: 2910,
    },
    {
      name: "Tue",
      economic: 3060,
      clothes: 9880,
      electronic: 5290,
    },
    {
      name: "Wed",
      economic: 4630,
      clothes: 6408,
      electronic: 2099,
    },
    {
      name: "Thu",
      economic: 9890,
      clothes: 9650,
      electronic: 4581,
    },
    {
      name: "Fri",
      economic: 8545,
      clothes: 2356,
      electronic: 4523,
    },
    {
      name: "Sat",
      economic: 8564,
      clothes: 2624,
      electronic: 8562,
    },
  ];

function ComposedChart() {
  return (
    <div className='composedchart'>
        <h1>Revenue Analytics</h1>
        <div className='chart'>
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis/>
          <Tooltip/>
          <Area type="monotone" dataKey="electronic" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="economic" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ComposedChart