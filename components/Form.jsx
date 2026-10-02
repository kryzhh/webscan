import { useState } from "react"
import ToggleBtn from "./ToggleBtn"


const FormInput = ({pos,value,onChange}) => {
  return <input type="text" className={`border border-border bg-muted placeholder-muted-foreground outline-none focus:border-accent transition text-foreground px-4 py-2.5 font-mono ${pos===0?"w-full":"max-[750px]:w-full"}`} placeholder={`${pos===0?"192.168.1.1 or https://example.com":"PORT (optional)"}`} name={`${pos===0?"URL":"port"}`} autoComplete="off" value={value} onChange={onChange} />
}

const Form = () => {
  const [Data, setData] = useState({ URL: "", is_https: false, port: "" });

  const submit = () => {
    console.log(Data)
  }
  return (
    <div className="border border-border bg-card my-10 p-6 max-[750px]:p-3">
      <div className="flex justify-start items-center space-x-3 max-[750px]:flex-col max-[750px]:space-y-3 max-[750px]:space-x-0">
        {
          [0,1].map((ele)=>{
            return <FormInput pos={ele} key={ele} value={ele===0?Data.URL:Data.port} onChange={(e)=>{ele===0?setData({...Data,URL:e.target.value}):setData({...Data,port:e.target.value})}} />
          })
        }
        <button className="transition bg-accent text-background px-7 py-3 cursor-pointer opacity-95 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed max-[750px]:w-full" disabled={Data.URL===""} onClick={submit}><p className="uppercase text-sm font-mono font-semibold">scan</p></button>
      </div>
      <div className="flex justify-start items-center space-x-3">
        <ToggleBtn data={Data.is_https} setData={setData}/>
        <p className="text-muted-foreground font-mono text-sm my-4">SSL / TLS scan</p>
      </div>
    </div>
  )
}

export default Form