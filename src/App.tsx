import { EmailValidate } from "../components/EmailValidate"
import { PasswordValidator } from "../components/PasswordValitade"
import "./App.css"
function App() {

  return (
    <>
    <div style={{ display:"flex", gap:"10px",width:"100%",justifyContent:"center",alignItems:"center",background: 'linear-gradient(to right, #ffcc00, #ff6600)',height:"100vh"}}>
      <form action="/send" style={{ display:"flex", flexDirection:"column", gap:"10px",width:"300px" ,backgroundColor:"white",padding:"10px",borderRadius:"10px"}}>
        <EmailValidate />
        <PasswordValidator />
        <button style={{borderRadius:"10px",height:"30px",background: 'linear-gradient(to right, #ffcc00, #ff6600)'}}>Register</button>
      </form>
    </div>
    </>
  )
}

export default App
