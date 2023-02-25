export type Scraper = {
    _id: string | null;
    name: string;
    baseUrl: string;
    dataPoints: DataPoint[]
}

export const emptyScraper: Scraper = {
    _id: null,
    name: "",
    baseUrl: "",
    dataPoints: []
}

export type DataPoint = {
    fieldName: string;
    querySelector: string;
    regex: string;
    matchName: string;
}