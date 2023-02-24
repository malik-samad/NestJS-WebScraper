import { useMemo, useState } from "react";
import InputField from "../../components/inputField"
import "./auth.css"

export default function AuthView() {
    const [isSignUp, setIsSignUp] = useState(false);
    const viewName = useMemo(() => {
        return isSignUp ? "Sign up" : "Sign in"
    }, [isSignUp])
    return <div className="auth-wrapper">
        <div className="auth-card">
            <div>
                <div className="auth-card-header"><h2>{viewName}</h2></div>
                <div className="auth-card-body">
                    <InputField name="email" type="email" label="Email" />
                    <InputField name="password" type="password" label="Password" />
                    <InputField style={{ marginTop: "30px" }} name="submit" type="button" value={viewName} />
                </div>
                <div className="auth-card-footer">
                    {isSignUp ?
                        <>Already have an account? <span onClick={() => setIsSignUp(false)}>Sign in</span></> :
                        <>Need an account? <span onClick={() => setIsSignUp(true)}>Sign up</span></>
                    }
                </div>
            </div>
        </div>
    </div>
}