import { useState } from "react"
import PasswordChecklist from "react-password-checklist"
export function PasswordValidator() {
	const [password, setPassword] = useState("")
	const [passwordAgain, setPasswordAgain] = useState("")
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }
    function handleChangeAgain(event: React.ChangeEvent<HTMLInputElement>) {
        setPasswordAgain(event.target.value)
    }
	return<>
            <label style={{ marginRight:"10px"}}>Passport:</label>
            <input type="password" onChange={handleChange} style={{ marginRight:"10px",border:"1px solid black",borderRadius:"5px",borderTop:"none",borderLeft:"none",borderRight:"none",height:"30px",boxShadow:"1px 1px 1px black"}}/>
            <label style={{ marginRight:"10px"}}>Passport Again:</label>
            <input type="password" onChange={handleChangeAgain} style={{ marginRight:"10px",border:"1px solid black",borderRadius:"5px",borderTop:"none",borderLeft:"none",borderRight:"none",height:"30px",boxShadow:"1px 1px 1px black"}}/>
            
        <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={8}
				value={password}
				valueAgain={passwordAgain}
                className="passwordChecklist"
			/>
    
    
    </>
}