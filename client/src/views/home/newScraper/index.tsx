import { useState } from "react"
import InputField from "../../../components/inputField"
import { Scraper, emptyScraper, DataPoint } from "../../../types"
import "./style.css"
import SaveIcon from '@mui/icons-material/Save';
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd"
import { DataPointComponent } from "./DataPointComponent";

export default function NewScraper() {
    const [scraper, setScraper] = useState<Scraper>(emptyScraper)

    const handleChange = (e: any) => {
        if (["name", "baseUrl"].some(k => k === e.target.name))
            setScraper({ ...scraper, [e.target.name]: e.target.value })
    }

    const handleDataPointChange = (key: string, value: string, index: number) => {
        if (index < 0 || index > scraper.dataPoints.length) {
            console.log("invalid index", index);
            return;
        }
        const dataPoints = scraper.dataPoints;
        dataPoints[index][key as keyof DataPoint] = value;

        setScraper({ ...scraper, dataPoints: [...dataPoints] })
    }


    const handleAddDataPoint = () => {
        setScraper({ ...scraper, dataPoints: [...scraper.dataPoints, { fieldName: "", querySelector: "", regex: "", matchName: "" }] })
    }

    const handleRemoveField = (index: number) => {
        if (index < 0 || index > scraper.dataPoints.length) {
            console.log("invalid index", index);
            return;
        }
        const dataPoints = scraper.dataPoints.filter((itm, i) => index !== i);

        setScraper({ ...scraper, dataPoints: [...dataPoints] })
    }

    return <div className="sub-view-wrapper">
        {/* Basic Scraper Info inputs */}
        <div className="scraper-basicInfo-wrapper">
            <InputField name="name" label="Name" type="text" value={scraper.name} onChange={handleChange} />
            <InputField style={{ marginLeft: "10px", width: "300px" }} name="baseUrl" label="Base Url" type="text" value={scraper.baseUrl} onChange={handleChange} />
        </div>
        {/* Scraper's DataPoints Info inputs */}
        <div className="flex-h scraper-data-point-wrapper">
            {/* Edit view for DataPoint fields */}
            {scraper.dataPoints.map((data_point, index) => <DataPointComponent key={index} data_point={data_point} handleDataPointChange={handleDataPointChange} handleRemoveField={handleRemoveField} index={index} />)}

            {/* Add another DataPoint field */}
            <div className="flex-c">
                <div className="click-effect plr-15 rd-5px" onClick={handleAddDataPoint}>

                    <PlaylistAddIcon style={{
                        width: "40px",
                        height: "40px"
                    }} /><span style={{ marginLeft: "10px", fontSize: "20px" }} className="flex-vc ">Add DataPoint</span>
                </div>
            </div>
        </div>
        <div className="flex-je">

            <div className="flex-c">
                <div className="click-effect plr-15 rd-5px" onClick={handleAddDataPoint}>

                    <SaveIcon style={{
                        width: "40px",
                        height: "40px"
                    }} /> <span style={{ marginLeft: "10px", fontSize: "20px" }} className="flex-vc ">Save Scraper</span>
                </div>
            </div>
        </div>
    </div>
}