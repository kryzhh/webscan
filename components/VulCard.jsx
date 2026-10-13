import { useState } from "react"


const VulCard = ({text}) => {
  const [Links, setLinks] = useState(false);

  return (
    <div className='my-4'>
      <div className='border border-border bg-card flex justify-between items-center space-x-4 px-5 py-4 text-sm max-[600px]:flex-col max-[600px]:space-x-0 max-[600px]:space-y-4'>
        <p className='text-foreground min-w-0 flex-auto wrap-anywhere max-[600px]:w-full'>{text}</p>
        <button className="text-accent uppercase font-mono cursor-pointer border border-accent hover:bg-accent hover:text-accent-foreground transition-all text-sm py-1 px-3 flex-none whitespace-nowrap max-[600px]:w-full" onClick={() => { setLinks(!Links) }}>{Links ? "close explanation" : "explain with ai"}</button>
      </div>
      <div className={`${Links ? "flex flex-col" : "hidden"} space-y-3 bg-muted py-3 px-5 border border-x-border border-b-border border-t-0`}>
        <p className='cursor-pointer text-accent text-xs tracking-wider font-mono'>[ AI EXPLANATION ]</p>
        <p className='cursor-pointer text-card-foreground'>Response headers reveal software and version details that attackers can match against known vulnerabilities. Disable server tokens or signature headers, while continuing to keep the underlying software patched.</p>
        <p className='cursor-pointer text-muted-foreground text-sm font-mono'>Verify recommendations from a cybersec expert before applying changes.</p>

      </div>
    </div>
  )
}

export default VulCard