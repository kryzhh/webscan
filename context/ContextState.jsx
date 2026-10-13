import { useState } from "react"
import ContextInit from "./ContextInit"


const ContextState = ({ children }) => {
    const [Logs, setLogs] = useState(null);
    const [Loading, setLoading] = useState(false);
    return (
        <ContextInit.Provider value={{Logs,Loading,setLogs,setLoading}}>
            {children}
        </ContextInit.Provider>
    )
}

export default ContextState