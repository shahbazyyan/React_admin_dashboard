import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './barchartbox.scss';

interface Props {
    title: string;
    color: string;
    dataKey: string
    chartData: object[]
}

function Barchartbox(props: Props) {
    return (
        <div className='barchartbox'>
            <h1>{props.title}</h1>
            <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <BarChart data={props.chartData}>
                    <Tooltip
                    contentStyle={{background: "#2a3447", borderRadius: "5px"}}
                    labelStyle={{display: "none"}}
                    cursor={{fill: "none"}}
                    />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
           </div>
        </div>
    )
}

export default Barchartbox