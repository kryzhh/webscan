import { useState } from "react"
import ReturnExpl from "./FetchVul"


const TextLoading = ({ TextIsLoading }) => {
  const commonClass = `h-3 bg-muted-foreground opacity-20 animate-pulse rounded rounded-[3px] ${!TextIsLoading ? "hidden" : ""}`
  return <>
    <div className={`${commonClass}`}></div>
    <div className={`${commonClass} w-[92%]`}></div>
    <div className={`${commonClass} w-[76%]`}></div>
  </>
}


const VulCard = ({ text }) => {
  const [ExplanationOpen, setExplanationOpen] = useState(false);
  const [Explanation, setExplanation] = useState(null);
  const [TextIsLoading, setTextIsLoading] = useState(false);

  const FetchExplanation = async () => {
    if (typeof Explanation === 'object' && Explanation!==null) {
      setExplanationOpen(prev=>!prev);
    }
    else {
      setTextIsLoading(true)
      setExplanationOpen(true)
      const resp = await ReturnExpl(text);
      setExplanation(resp);
      setTextIsLoading(false)
    }
  }

  return (
    <div className='my-4'>
      <div className='border border-border bg-card flex justify-between items-center space-x-4 px-5 py-4 text-sm max-[600px]:flex-col max-[600px]:space-x-0 max-[600px]:space-y-4'>
        <p className='text-foreground min-w-0 flex-auto wrap-anywhere max-[600px]:w-full'>{text}</p>
        <button className="text-accent uppercase font-mono cursor-pointer border border-accent hover:bg-accent hover:text-accent-foreground transition-all text-sm py-1 px-3 flex-none whitespace-nowrap max-[600px]:w-full" onClick={FetchExplanation}>{ExplanationOpen ? "close explanation" : "explain with ai"}</button>
      </div>
      <div className={`${ExplanationOpen ? "flex flex-col" : "hidden"} space-y-3 bg-muted py-3 px-5 border border-x-border border-b-border border-t-0`}>
        <p className='text-accent text-xs tracking-wider font-mono'>[ AI EXPLANATION ]</p>
        <TextLoading TextIsLoading={TextIsLoading} />
        {
          ["meaning","risk","fix"].map((ele,pos)=>{
            return <div key={pos} className={`text-card-foreground ${TextIsLoading ? "hidden" : ""}`}> <strong>{ele.replace(ele[0],ele[0].toUpperCase())}</strong>: {Explanation?.[ele]}</div>
          })
        }
        
        <p className='text-muted-foreground text-sm font-mono'>Verify recommendations from a cybersec expert before applying changes.</p>

      </div>
    </div>
  )
}

export default VulCard