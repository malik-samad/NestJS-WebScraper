import "./style.css";
import "../inputField/style.css";

type Props = {
    name: string,
    value?: string,
    onChange?: (event: any) => void,
    onClick?: (event: any) => void,
    label?: string,
    style?: React.CSSProperties,
    inputStyle?: React.CSSProperties,
    labelStyle?: React.CSSProperties,
    passToggleStyle?: React.CSSProperties,
    optionList: { value: string; label: string }[]
}

export default function DropDown(prop: Props) {

    return <div style={prop.style} className="input-field-wraper">
        <div className="input-field-label">
            <label style={prop.labelStyle} >{prop.label}</label>
        </div>
        <select name={prop.name} style={prop.inputStyle} value={prop.value}>
            <option label="Please Select Scraper" selected />
            {prop.optionList.map((itm, index) => <option key={index} value={itm.value} label={itm.label} />)}
        </select>
    </div>
}