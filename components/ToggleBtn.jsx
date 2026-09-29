import { useState } from "react"


const ToggleBtn = () => {
    const [ToggleState, setToggleState] = useState(false);

    const Toggle = () => {
        setToggleState(!ToggleState)
    }
    return (
        <div className='bg-accent border border-border w-10 cursor-pointer' style={{background:`${ToggleState?"var(--accent)":"var(--muted)"}`}} onClick={Toggle}>
            <div className="bg-background size-4 my-0.5 ml-0.5 transition-all" style={{marginLeft:`${ToggleState?"20px":"2px"}`}}></div>
        </div>
    )
}

export default ToggleBtn