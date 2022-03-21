import React, { useEffect, useState } from "react";
import { getGamePerformanceStats } from "../../services/api";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Label,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router";
import MySwiper from "../components/MySwiper";

export const GameChart = (props) => {
  let { data } = props
  const title = data.title
  const laptops = data.laptops
  console.log("data.length: ", laptops.length);
  const navigate = useNavigate();

  const test = (bar) => {
    console.log("tesssssst bar: ", bar.laptopId);
    navigate(`/laptopdetails/${bar.laptopId}`);
  };

  return (
    <div>
      <ResponsiveContainer minHeight={600} width="100%">
        <BarChart layout="vertical" width={930} height={650} data={laptops}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis
            dataKey="title"
            type="category"
            width={500}
            height={100}
            interval={0}
          >
            <Label value={title} offset={0} position="insideTop" />
          </YAxis>
          <XAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar
            background
            label
            dataKey="framerate.average"
            fill="#8884d8"
            onClick={test.bind(this)}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export const GamePerformanceStats = () => {
  const stats = getGamePerformanceStats();
  const title = stats[0].title;
  console.log("stats", stats);
  const keys = Object.keys(stats);
  const values = Object.values(stats);
  console.log("values", values[0].DLSS);

  const [selectedTitle, setSelectedTitle] = useState(0)
  const [data, setData] = useState(stats[0].laptops)

  useEffect(() => {
    console.log('useEffect', selectedTitle);
    setData( findDataById(selectedTitle) )
    console.log('findDataById', data);
  }, [selectedTitle])

  const slideTopics = stats.map(stat => {
    return { id: stat.id, topic: stat.title }
  })

  const findDataById = (id) => {
    return stats[id]
  }

  return (
    <div>
      <MySwiper selectedSlide={setSelectedTitle} slideTopics={slideTopics} />
      <GameChart data={data}/>
    </div>
  );
};

export default GamePerformanceStats;
