type RevenuePerDecile = {
  decile:string,
  average:number
}

type PovertyData = {
  year:number
  country:string
  povertyLine: number 
  wealthLine:number
  medianRevenue:number
  revenuePerDecile:RevenuePerDecile[]
}

const medianRevenue = 30620;

export const povertyDatas: PovertyData = {
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



export const listKinds = ["Extrème gauche" , "Extrème centre" , "Extrème droite" , "Abstention"] as const;
export type ListKind = (typeof listKinds)[number];

type ElectoralList = {
  percentage: number
  name: string
  by:string
  kind: ListKind
}

type EuropeanData = {
  lists:ElectoralList[]

}

export const europeanDatas: EuropeanData = {
lists: [
{name:"Lutte Ouvrière",percentage:1.5,by:"Nathalie Arthaud", kind:"Extrème gauche" },
{name:"Nouveau Parti Anticapitaliste",percentage:1,by:"Selma Labib", kind:"Extrème gauche" },
{name:"Parti Communiste",percentage:2.5,by:"Léon Deffontaines", kind:"Extrème gauche" },
{name:"France Insoumise",percentage:7,by:"Manon Aubry", kind:"Extrème gauche" },
{name:"Parti Socialiste et Place Publique",percentage:12,by:"Raphaël Glucksmann", kind:"Extrème gauche" },
{name:"Ecologistes",percentage:7,by:"Marie Toussaint", kind:"Extrème gauche" },
{name:"Changer l'Europe / Nouvelle Donne",percentage:0,by:"Pierre Larrouturou", kind:"Extrème gauche" },
{name:"Parti radical de gauche",percentage:0.5,by:"Guillaume Lacroix", kind:"Extrème centre"},
{name:"Ecologie au centre",percentage:1.5,by:"Jean-Marc Governatori", kind:"Extrème centre"},
{name:"Renaissance, Modem, Horizons et UDI",percentage:15.5,by:"Valérie Hayer", kind:"Extrème centre"},
{name:"Alliance Rurale",percentage:1.5,by:"Jean Lassalle", kind:"Extrème centre"},
{name:"Téritoires en mouvement",percentage:0,by:"Jean-Christophe Fromantin", kind:"Extrème centre"},
{name:"Les républicains",percentage:8,by:"François Xavier Bellamy", kind:"Extrème centre"},
{name:"Union Populaire Républicaine",percentage:1,by:"François Asselineau", kind:"Extrème centre"},
{name:"Patriotes",percentage:1.5,by:"Florian Philippot", kind:"Extrème droite"},
{name:"Rassemblement National",percentage:32,by:"Jordan Bardella", kind:"Extrème droite"},
{name:"Reconquête",percentage:5.5,by:"Marion Maréchal", kind:"Extrème droite"},
{name:"Parti Animaliste",percentage:1.5,by:"Hélène Thoury", kind:"Extrème droite"},
{name:"Autre",percentage:0.5,by:"???", kind:"Abstention"},
{name:"Pas d'intention de vote",percentage:20,by:"N/A", kind:"Abstention"},
]
};