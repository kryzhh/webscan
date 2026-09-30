import { useState } from "react"


const VulCard = () => {
  const [Links, setLinks] = useState(false);


  return (
    <div className='my-4'>
      <div className='border border-border bg-card flex justify-between items-center px-5 py-4 text-sm'>
        <p className='text-foreground'>Open Port 22 — SSH Exposed</p>
        <button className="text-accent uppercase font-mono cursor-pointer border border-accent hover:bg-accent hover:text-accent-foreground transition-all text-sm py-1 px-3" onClick={() => { setLinks(!Links) }}>{Links ? "close" : "view fix"}</button>
      </div>
      <div className={`font-mono uppercase text-accent text-sm underline ${Links ? "flex" : "hidden"} justify-start items-center space-x-5 bg-muted py-2 px-5 border border-x-border border-b-border border-t-0`}>
        <p className='cursor-pointer'>↗ link 1</p>
        <p className='cursor-pointer'>↗ link 2</p>
      </div>
    </div>
  )
}

export default VulCard