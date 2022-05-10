import React, { Component, useEffect, useState } from "react";
import { getGamePerformanceStats } from "../../services/api";
import { styled } from "@mui/material/styles";

import { Grid, Paper, Container } from "@mui/material";
import { Box } from "@mui/system";
import Chart from 'react-apexcharts'
import { useNavigate } from "react-router";
import MySwiper from "../components/MySwiper";
import  {ScrollMenu} from "react-horizontal-scrolling-menu";
import '../components/myswiper.css'
import HorizontalScroll2 from '../components/horizontal-scroll/HorizontalScroll2'
import { TagInput } from "../components/tag-input/TagInput";
import { Tags } from "../components/tags/Tags";
import Select from 'react-select'

export const GameChart = (props) => {
  let { laptopData } = props
  // const title = data.title   original
  // const laptops = data.laptops   original
  const laptops = laptopData
  console.log("data.length: ", laptops.length);
  const navigate = useNavigate();

  const test = (bar) => {
    console.log("tesssssst bar: ", bar.laptopId);
    navigate(`/laptopdetails/${bar.laptopId}`);
  };

  // const options = {
  //   chart: {
  //     id: 'apexchart-example'
  //   },
  //   xaxis: {
  //     categories: laptops.map(laptop => { return laptop.title })
  //   }
  // };
  // const series = [{
  //   name: 'series-1',
  //   data: laptops.map(laptop => { return laptop.framerate.average })
  // }]

  const series = [{
    name: 'Average framerate in FPS',
    data: laptops.map(laptop => { return laptop.framerate.average })
  }]

  const options = {
    chart: {
      type: 'bar',
      height: '100%',
      width: 300,
      events: {
        dataPointSelection: function(event, chartContext, config) {
          console.log(chartContext, config);
        }
      }
    },
    plotOptions: {
      bar: {
        barHeight: '100%',
        horizontal: true,
        dataLabels: {
          position: 'bottom',
        },
      }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      offsetX: 0,
      style: {
        fontSize: '12px',
        colors: ['#000']
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
      }
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: laptops.map(laptop => { return laptop.title })
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  }



  return (

    // <div className={{resize: 'both', overflow: 'auto'}}>
    // <div class="resize: 'both'; overflow: 'auto'">
      <Chart options={options} series={series} type="bar" width={400} height={650}/>
      // </div>

    // <>
    
  )
}

const MenuItem = ({ text, selected }) => styled("div")(({ theme }) => ({
  padding: "0 40px",
  margin: "5px 10px",
  userselect: "none",
  cursor: "pointer",
  border: "none"
}));

const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem1 = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export const ReactHorizontalScroll = () => {
  const [selected, setSelected] = useState(0)

  const onSelect = key => {
    setSelected({ selected: key })
  }

  const menu = Menu(list, selected);

    return (
      <div className="myswiper">

        <ScrollMenu
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
          >
            {
        list.map((item) => {
          return (
            <MenuItem text={item.name} />
          )
        })
      }
          </ScrollMenu>
      </div>
    );
}

export const GamePerformanceStats = () => {
  const stats = getGamePerformanceStats();
  const title = stats[0].title;
  console.log("stats", stats);
  const keys = Object.keys(stats);
  const values = Object.values(stats);
  console.log("values", values[0].DLSS);

  const [selectedTitle, setSelectedTitle] = useState(0)
  const [currentSelectedTitle, setCurrentSelectedTitle] = useState(0)
  const [currentLaptopData, setCurrentLaptopData] = useState(0)
  const [filters, setFilters] = useState([])
  const [data, setData] = useState(stats[0])
  const [laptopData, setLaptopData] = useState(data.laptops)
  const [observableLaptopData, setObservableLaptopData] = useState(data.laptops)

  useEffect(() => {
    console.log('useEffect selectedTitle', selectedTitle);
    console.log('useEffect currentSelectedTitle', currentSelectedTitle);
    if (selectedTitle !== currentSelectedTitle) {
      // setData( findDataById(selectedTitle) )
      setObservableLaptopData( getLaptopDataFromSelectedTitle(selectedTitle) )
      console.log('useEffect filters.length:', filters.length);
      if (filters.length > 0) {
        console.log('useEffect apply filters:', filters);
        applyFilter(filters)
      } 
      // else {
      //   console.log('useEffect clear filters');
      //   clearFilters()
      // }
    }
    setCurrentSelectedTitle(selectedTitle)
    // updateCurrentSelectedTitle(selectedTitle)
    console.log('findDataById', data);
  }, [selectedTitle, observableLaptopData])

  const slideTopics = stats.map(stat => {
    return { id: stat.id, topic: stat.title }
  })

  const findDataById = (id) => {
    return stats[id]
  }

  const getLaptopDataFromSelectedTitle = (selectedTitle) => {
    return findDataById(selectedTitle).laptops
  }

  const updateCurrentSelectedTitle = (selectedTitle) => {
    setCurrentSelectedTitle(selectedTitle)
    if (filters.length > 0) {
        console.log('useEffect apply filters:', filters);
        applyFilter(filters)
    }
  }

  const options = [
    { value: 'Lenovo', label: 'Brand: Lenovo' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const filterLaptopsByBrand = (brand) => {
    console.log('filterLaptopsByBrand:', brand);
    // const laptops = data.laptops
    const filteredLaptops = observableLaptopData.filter((laptop) => brand === getLaptopBrand(laptop.title))
    console.log('filteredLaptops:', filteredLaptops);
    const filteredLaptops2 = observableLaptopData.filter((laptop) => brand !== getLaptopBrand(laptop.title))
    console.log('filteredLaptops2:', filteredLaptops2);
    if (filteredLaptops) {
      console.log('setObservableLaptopData called');
      setObservableLaptopData(filteredLaptops)
    } else {
      setObservableLaptopData( getLaptopDataFromSelectedTitle(selectedTitle) )
    }
  }

  const getLaptopBrand = (laptopTitle) => {
    const indexOfSpace = laptopTitle.indexOf(' ', 0)
    
    const s = laptopTitle.substring(0, indexOfSpace)
    return s
    // console.log('getLaptopBrand', s);
  }

  const applyFilter = (options) => {
    console.log('onChange options value ', options);
    setObservableLaptopData( [{}] )
    addFilters(options)
    console.log('onChange currentLaptopData ', observableLaptopData);
    options.map((option) => {
      console.log('option value ', option.value);
      console.log('option label ', option.label);
      if (option.label.includes('Brand')) {
        console.log('filter by brand');
        filterLaptopsByBrand(option.value)
      }
    }) 
    if (options.length === 0) {
      console.log('No option selected, clearing filters');
      clearFilters()
    }
  }
  
  const filter = (options) => {
    applyFilter(options)
  }

  const addFilters = (options) => {
    console.log('adding filters', options);
    setFilters(options)
  }
  
  const clearFilters = () => {
    console.log('clearing filter');
    setFilters([])
    setObservableLaptopData( getLaptopDataFromSelectedTitle(selectedTitle) )
  }

  return (
    <>
    <Paper elevation={3} xs={{resize: 'both', overflow: 'auto'}} width="100%">
    <HorizontalScroll2 slideTopics={slideTopics} selectedSlide={setSelectedTitle}/>
    <div className={{padding: '20px'}}></div>
    <Select options={options} onChange={filter} isMulti/>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2} md={4}>
          <GameChart laptopData={observableLaptopData}/>
      </Grid>
        </Grid>
      </Paper>
    {/* <Paper elevation={3} sx={{ height: '100%' }}width="100%">
      <MySwiper selectedSlide={setSelectedTitle} slideTopics={slideTopics} />
    </Paper>
    <div class={{padding: 60}}>
    <Paper elevation={3} sx={{ height: '100%' }}width="100%">
      <Grid container spacing={2}>
        <Grid item xs={1} sm={1} md={4}>
          <GameChart data={data}/>
      </Grid>
        </Grid>
      </Paper>

    </div> */}
      </>
  );
};

export default GamePerformanceStats;