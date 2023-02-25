import InputField from "../../../components/inputField";
import { DataPoint } from "../../../types";
import DeleteIcon from '@mui/icons-material/Delete';


type Props = {
    handleDataPointChange: (key: string, value: string, index: number) => void,
    handleRemoveField: (index: number) => void,
    data_point: DataPoint,
    index: number
}

export function DataPointComponent({ handleDataPointChange, handleRemoveField, data_point, index }: Props) {
    return <div key={index} className="flex-v scraper-data-point">
        <div className="flex-v">
            <InputField style={{ marginLeft: "10px" }} name={"fieldName"} label={"Field name*"}
                type="text" value={data_point.fieldName} onChange={(e) => handleDataPointChange("fieldName", e.target.value, index)} />
            <InputField style={{ marginLeft: "10px" }} name={"querySelector"} label={"Query Selector*"}
                type="text" value={data_point.querySelector} onChange={(e) => handleDataPointChange("querySelector", e.target.value, index)} />
            <InputField style={{ marginLeft: "10px" }} name={"regex"} label={"Regex"}
                type="text" value={data_point.regex} onChange={(e) => handleDataPointChange("regex", e.target.value, index)} />
            <InputField style={{ marginLeft: "10px" }} name={"matchName"} label={"Match-name"}
                type="text" value={data_point.matchName} onChange={(e) => handleDataPointChange("matchName", e.target.value, index)} />

        </div>
        <div className="flex-vc plr-15">
            <div className="click-effect plr-15 rd-5px" onClick={() => handleRemoveField(index)}>
                <DeleteIcon style={{
                    width: "40px",
                    height: "40px"
                }} /><span style={{ marginLeft: "10px", fontSize: "20px" }} className="flex-vc ">Remove</span>
            </div>
        </div>
    </div>
}