import { useState } from "react";
import "./style.css";

type Props = {
    name: string,
    type: string,
    value?: string,
    onChange?: (event: any) => void,
    onClick?: (event: any) => void,
    label?: string,
    style?: React.CSSProperties,
    inputStyle?: React.CSSProperties,
    labelStyle?: React.CSSProperties,
    passToggleStyle?: React.CSSProperties,
}

export default function InputField(prop: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return <div style={prop.style} className="input-field-wraper">
        <div className="input-field-label">
            <label style={prop.labelStyle} >{prop.label}</label>
            {prop.type === "password" && <span style={prop.passToggleStyle} className="password-toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</span>}
        </div>
        <input name={prop.name} style={prop.inputStyle} value={prop.value} type={prop.type === "password" && showPassword ? "text" : prop.type} onChange={prop.onChange} />
    </div>
}