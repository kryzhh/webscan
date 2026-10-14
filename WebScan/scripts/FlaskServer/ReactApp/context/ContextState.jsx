import { useEffect, useState } from "react"
import ContextInit from "./ContextInit"


const ContextState = ({ children }) => {
    const [Logs, setLogs] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [APIKEY, setAPIKEY] = useState("")

    useEffect(() => {
        fetch("http://127.0.0.1:5000/GetKey", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
            .then((resp) => { return resp.json() }).then((resp) => { setAPIKEY(resp.key) })
    }, [])

    return (
        <ContextInit.Provider value={{ Logs, Loading, setLogs, setLoading, APIKEY }}>
            {children}
        </ContextInit.Provider>
    )
}

export default ContextState