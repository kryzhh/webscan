import { useState } from "react"
import ToggleBtn from "./ToggleBtn"


const Form = () => {
  const [IPaddress, setIPaddress] = useState("");
  return (
    <div className="border border-border bg-card my-10 px-6 py-6">
      <div className="flex justify-start items-center space-x-3">
        <input type="text" className="border border-border bg-muted placeholder-muted-foreground outline-none focus:border-accent transition text-foreground px-4 py-2.5 w-full font-mono" placeholder="192.168.1.1 or https://example.com" autoComplete="off" value={IPaddress} onChange={(e)=>{setIPaddress(e.target.value)}} />
        <button className="transition bg-accent text-background px-7 py-3 cursor-pointer opacity-95 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed" disabled={IPaddress===""}><p className="uppercase text-sm font-mono font-semibold">scan</p></button>
      </div>
      <div className="flex justify-start items-center space-x-3">
        <ToggleBtn/>
        <p className="text-muted-foreground font-mono text-sm my-4">SSL / TLS scan</p>
      </div>
    </div>
  )
}

export default Form