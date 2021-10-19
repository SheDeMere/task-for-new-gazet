import './App.css';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from 'recharts';

function App() {
    const data = [
        { name: 'точка А', uv: 5000, pv: 1400},
        { name: 'точка Б', uv: 1000, pv: 1398},
        { name: 'точка В', uv: 2000, pv: 9800},
        { name: 'точка Г', uv: 2780, pv: 3908},
        { name: 'точка Д', uv: 9890, pv: 4800},
        { name: 'точка Е', uv: 2390, pv: 3800},
        { name: 'точка Ё', uv: 3490, pv: 4300},
    ];

  return (
    <div className="App">
        <LineChart
            width={1000}
            height={600}
            data={data}

        >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>

    </div>
  );
}

export default App;
