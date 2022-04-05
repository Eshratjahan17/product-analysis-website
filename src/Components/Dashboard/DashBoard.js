import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css';

const DashBoard = () => {
 const data= [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="dash-board-conatiner">
      <h1>DashBoard</h1>
      <div className="chart-conatiner">
        <div className="pi-chart">
          <PieChart width={400} height={300}>
            <Pie
              dataKey="sell"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>
        </div>
        <div className="bar-chart">
          <BarChart width={500} height={300} data={data}>
            <XAxis dataKey="revenue" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
            <Legend
              width={100}
              wrapperStyle={{
                top: 40,
                right: 20,
                backgroundColor: "#f5f5f5",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "40px",
              }}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="sell" fill="#8884d8" barSize={30} />
          </BarChart>
        </div>
        <div className="line-chart">
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="investment" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
          </LineChart>
        </div>

        <div className="area-chart">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="investment" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;