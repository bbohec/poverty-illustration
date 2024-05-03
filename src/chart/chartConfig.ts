import { type ChartConfiguration, type Color } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { europeanDatas, listKinds, povertyDatas, type ListKind } from "../datas/datas";

export const povertyChartConfig:ChartConfiguration={
  type:"bar",
  data: {
    labels: povertyDatas.revenuePerDecile.map(({decile}) => decile),
    datasets: [
      {
        label: 'Average revenue',
        data: povertyDatas.revenuePerDecile.map(({average}) => average),
        type:'line',
        order:0,
        borderColor:'#ff00ff',
        fill:{
          above: "blue",
          below:"red",

          target:{value:povertyDatas.medianRevenue}
        }
      },
      {
        label: 'Poverty line',
        data: povertyDatas.revenuePerDecile.map(() => povertyDatas.povertyLine),
        type:'line',
        order: 2,
        borderColor: "#FF0303",
        backgroundColor:"#fc7158"
      },
      {
        label: 'Wealth line',
        data: povertyDatas.revenuePerDecile.map(() => povertyDatas.wealthLine),
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


const colorsByKind = (offset:number): Record<ListKind,Color> => ({
  "Abstention": `rgba(0,0,0,255)`,
  "Extrème gauche": `rgba(255,0,0,255)`,
  "Extrème centre": `rgba(0,150,150,255)`,
  "Extrème droite": `rgba(0,0,255,255)`,
});




const totalCircumference = 180*europeanDatas.lists.reduce((sum, { percentage }) => sum + percentage, 0)/100 ;

export const europeanChartConfig:ChartConfiguration={
  type:"doughnut",
  data:{
    datasets: [
      {
        data:europeanDatas.lists.map(({percentage}) => percentage),
        backgroundColor: [...europeanDatas.lists.map(({kind},index) => colorsByKind(index*5)[kind]),...listKinds.map(listKind => colorsByKind(0)[listKind])],
        hoverOffset:100,
        label:"Liste",
        circumference: totalCircumference,
        rotation:-90
      },
      {
        data:[...europeanDatas.lists.map(() => null),...listKinds.map(listKind=>europeanDatas.lists.filter(({kind})=> kind === listKind).reduce((sum, {percentage}) => sum + percentage, 0))],
        backgroundColor: [...europeanDatas.lists.map(() => ""),...listKinds.map(listKind => colorsByKind(0)[listKind])],
        label:"Regroupement",
        hoverOffset:-100,
        circumference: totalCircumference,
        rotation:-90
      }
    ],
    labels:[...europeanDatas.lists.map(({name})=>name),...listKinds],
      
    
  },
  plugins:[ChartDataLabels],
  options:{
    responsive:true,
    plugins:{
      legend:{
        display:false
      },
      datalabels:{
        color:`rgba(200,200,200,255)`,
        formatter:(value, context)=> value && `${context.chart.data.labels ? context.chart.data.labels[context.dataIndex]:null}\n${value}%`   
      }
    }
  }
};