import React, { useState } from "react";
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

export const GamePerformanceStats = () => {
  const stats = getGamePerformanceStats();
  const title = stats[0].title;
  console.log("stats", stats);
  const keys = Object.keys(stats);
  const values = Object.values(stats);
  console.log("values", values[0].DLSS);

  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0)

  const handleSelectedIndex = (index) => {
    setSelectedTitleIndex(index)
  }

  const slideTopics = [
    {
        id: 0,
        topic: 'Cyberpunk 2077'
    },
    {
        id: 1,
        topic: 'Control'
    },
    {
        id: 2,
        topic: 'Red Dead Redemption 2'
    },
]

  const indices = slideTopics.map(slide => {return slide.id})

  const data1 = stats[0].laptops;
  const data2 = stats[0].laptops.map((laptop) => {
    // data.push({ y: laptop.title, x: laptop.framerate.average })
    return { y: laptop.framerate.average, x: laptop.title };
  });

  const navigate = useNavigate();

  const test = (bar) => {
    console.log("tesssssst bar: ", bar.laptopId);
    navigate(`/laptopdetails/${bar.laptopId}`);
  };

  return (
    <div>
      <MySwiper slideTopics={slideTopics} />
      <ResponsiveContainer minHeight={600} width="100%">
        <BarChart layout="vertical" width={930} height={650} data={data1}>
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
  );
};

export default GamePerformanceStats;
