export type Scraper = {
    name: string;
    homePageUrl: string;
    dataPoints: DataPoint[]
}

export type DataPoint ={
    name: string;
    querySelector: string;
    regex?: {reg: string, matchName: string};
}