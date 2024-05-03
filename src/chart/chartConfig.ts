import type { ChartConfiguration } from "chart.js";
import { datas } from "../datas/datas";

export const chartConfig:ChartConfiguration={
  type:"bar",
  data: {
    labels: datas.revenuePerDecile.map(({decile}) => decile),
    datasets: [
      {
        label: 'Average revenue',
        data: datas.revenuePerDecile.map(({average}) => average),
        type:'line',
        order:0,
        borderColor:'#ff00ff',
        fill:{
          above: "blue",
          below:"red",

          target:{value:datas.medianRevenue}
        }
      },
      {
        label: 'Poverty line',
        data: datas.revenuePerDecile.map(() => datas.povertyLine),
        type:'line',
        order: 2,
        borderColor: "#FF0303",
        backgroundColor:"#fc7158"
      },
      {
        label: 'Wealth line',
        data: datas.revenuePerDecile.map(() => datas.wealthLine),
        type:'line',
        order:3,
        borderColor:"#1C00FF",
        backgroundColor:"#5e58fc"
      },
    ]
  },
  options:{
    scales:{
      y:{
        beginAtZero:true
      }
    }
  }
};
