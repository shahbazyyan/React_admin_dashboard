import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import './single.scss';

interface Props {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart: {
        dataKeys: { name: string; color: string }[];
        data: object[];
    };
    activities?: { time: string; text: string }[];
};

function Single(props: Props) {
    return (
        <div className='single'>
            <div className="view">
                <div className="info">
                    <div className="topinfo">
                        {props.img && <img src={props.img} alt="img" />}
                        <h1>{props.title}</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {Object.entries(props.info).map((item) => (
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]}:</span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        ))}
                    </div>

                </div>
                <hr />
               {props.chart && <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={props.chart.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                             {props.chart.dataKeys.map(item => (
                            <Line type="monotone" dataKey={item.name} stroke={item.color} strokeDasharray="3 4 5 2" />
                             ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                   }
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                <ul>
                {props.activities?.map((item) => (
                    <li key={item.text}>
                        <div>
                            <p>{item.text}</p>
                            <time>{item.time}</time>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}


export default Single