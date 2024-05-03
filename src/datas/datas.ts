type RevenuePerDecile = {
  decile:string,
  average:number
}

type Data = {
  year:number
  country:string
  povertyLine: number 
  wealthLine:number
  medianRevenue:number
  revenuePerDecile:RevenuePerDecile[]
}

const medianRevenue = 30620;

export const datas: Data = {
  povertyLine:medianRevenue*0.6,
  wealthLine:medianRevenue*1.4,
  medianRevenue,
  year:2018,
  country:"France",
  revenuePerDecile:[
    { decile: "< D1", average: 10030 },
    { decile: "D1 - D2", average: 15910 },
    { decile: "D2 - D3", average: 19730 },
    { decile: "D3 - D4", average: 23680 },
    { decile: "D4 - D5", average: 28150 },
    { decile: "D5 - D6", average: 33320 },
    { decile: "D6 - D7", average: 39260 },
    { decile: "D7 - D8", average: 46450 },
    { decile: "D8 - D9", average: 57230 },
    { decile: "> D9", average: 102880 },
  ]
};
