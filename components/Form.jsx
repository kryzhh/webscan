import { useContext, useEffect, useState } from "react"
import ToggleBtn from "./ToggleBtn"
import ContextInit from "../context/ContextInit"


const FormInput = ({ pos, value, onChange }) => {
  return <input type="text" className={`border border-border bg-muted placeholder-muted-foreground outline-none focus:border-accent transition text-foreground px-4 py-2.5 font-mono ${pos === 0 ? "w-full" : "max-[750px]:w-full"}`} placeholder={`${pos === 0 ? "IP Address, Eg: 192.168.1.1" : "PORT (optional)"}`} name={`${pos === 0 ? "URL" : "port"}`} autoComplete="off" value={value} onChange={onChange} />
}

const Form = () => {
  const {setLoading,setLogs} = useContext(ContextInit)
  const [Data, setData] = useState({ URL: "", is_https: false, port: "" });
  const [Validation, setValidation] = useState(false);

  const ipRegex = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;
  const portRegex = /^(?:6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{0,3})$/;


  const submit = async(e) => {
    e.preventDefault();
    if (!(ipRegex.test(Data.URL) && portRegex.test(Data.port))) {
      setValidation(true)
      setTimeout(() => {
        setValidation(false)
      }, 3000);
    }
    else {
      console.log(Data)
      // setLoading(true)
      // const resp = await fetch("http://127.0.0.1:5000/Logs", {
      //   method: "POST",
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ Data })
      // })
      // const jsonResp = await resp.json()
      // setLogs(jsonResp.logs)
      // setLoading(false)
    }
  }
  return (
    <div className="border border-border bg-card my-10 p-6 max-[750px]:p-3">
      <div className="flex justify-start items-center space-x-3 max-[750px]:flex-col max-[750px]:space-y-3 max-[750px]:space-x-0">
        {
          [0, 1].map((ele) => {
            return <FormInput pos={ele} key={ele} value={ele === 0 ? Data.URL : Data.port} onChange={(e) => { ele === 0 ? setData({ ...Data, URL: e.target.value }) : setData({ ...Data, port: e.target.value }) }} />
          })
        }
        <button className="transition bg-accent text-background px-7 py-3 cursor-pointer opacity-95 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed max-[750px]:w-full" disabled={Data.URL === ""} onClick={submit}><p className="uppercase text-sm font-mono font-semibold">scan</p></button>
      </div>
      <p className={`text-red-500 text-sm font-mono mt-2.5 ${!Validation ? "hidden" : ""}`}>Enter a valid IP address or URL. If provided, the port must be between 1 and 65535.</p>
      <div className="flex justify-start items-center space-x-3">
        <ToggleBtn data={Data.is_https} setData={setData} />
        <p className="text-muted-foreground font-mono text-sm my-4">SSL / TLS scan</p>
      </div>
    </div>
  )
}

export default Form