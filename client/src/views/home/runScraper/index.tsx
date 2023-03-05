import DropDown from "../../../components/DropDown"
import { Scraper } from "../../../types"
import "./style.css"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';


export default function RunScraper() {

    const scrapers: Scraper[] = [
        {
            _id: "adsadsfasdf",
            name: "Scraper 1",
            baseUrl: "wwww.baseUrl1.com",
            dataPoints: [
                { fieldName: "price", querySelector: ".price", regex: "regex1", matchName: "price" }
            ]
        },
        {
            _id: "adsadsfasdfasdf",
            name: "Scraper 2",
            baseUrl: "wwww.baseUrl2.com",
            dataPoints: [
                { fieldName: "price2", querySelector: ".price2", regex: "regex2", matchName: "price2" }
            ]
        }]

    return <div className="sub-view-wrapper">
        <div className="scraper-basicInfo-wrapper">
            <DropDown name="scraper" label="Scraper" optionList={scrapers.map(itm => ({ value: itm._id as string, label: itm.name }))} />
            <div className="flex-vc p-10">
                <div className="click-effect plr-15 rd-5px" style={{ marginTop: "29px" }}>
                    <PlayCircleFilledIcon style={{
                        width: "40px",
                        height: "40px"
                    }} /> <span style={{ marginLeft: "10px", fontSize: "20px" }} className="flex-vc ">Run Scraper</span>
                </div>
            </div>
        </div>
    </div>
}