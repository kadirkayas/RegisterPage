import { useState } from "react";
import validator from "validator"




export function EmailValidate(){
    let [valid, setValid] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (validator.isEmail(inputValue)) {
            valid = true
          setValid(valid)
        } else {
            valid = false
          setValid(valid)
        }
    }

    return <>
    
    <div style={{ marginBottom:"10px"}}>
        <label htmlFor="email" style={{ marginRight:"15px"}}>Email:</label>
        <input type="email" onChange={handleChange} style={{ marginRight:"10px",border:"1px solid black",borderRadius:"5px",borderTop:"none",borderLeft:"none",borderRight:"none",height:"30px",boxShadow:"1px 1px 1px black"}}/>
            {valid ? (
            <p style={{ color: 'green' }}>This email valid</p>
        ) : (
            <p style={{ color: 'red' }}>This email not valid</p>
        )}
    </div>
        
    </>
}