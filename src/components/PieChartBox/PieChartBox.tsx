import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './piechartbox.scss';

type Props = {
  name: string;
  value: number;
  color: string;
}[];

const data: Props = [
  { name: "Mobile", value: 1480, color: "#0088FE" },
  { name: "Desktop", value: 3875, color: "#00C49F" },
  { name: "Laptop", value: 4796, color: "#FFBB28" },
  { name: "Tablet", value: 997, color: "#FF8042" },
];

function PieChartBox() {
  return (
    <div className='piechartbox'>
    <h1>Leads by Source</h1>
    <div className="chart">
      <ResponsiveContainer width="99%" height={300}>
      <PieChart>
        <Tooltip 
        contentStyle={{background: "#fff" , borderRadius: "6px"}}
        />
        <Pie
          data={data}
          innerRadius={"72%"}
          outerRadius={"92%"}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} 
            fill={item.color} />
          ))}
        </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="options">
        {data.map(item => (
            <div className="option" key={item.name}>
               <div className="title">
                 <div className="dot" style={{backgroundColor: item.color}}/>
                 <span>{item.name}</span>
               </div>
               <span>{item.value}</span>
            </div>
        ))}
    </div>
    </div>
  )
}

export default PieChartBox