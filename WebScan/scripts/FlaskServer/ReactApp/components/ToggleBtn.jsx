


const ToggleBtn = ({data,setData}) => {

    const Toggle = () => {
        setData(d=>({...d,is_https:!d.is_https}))
    }
    return (
        <div className='bg-accent border border-border w-10 cursor-pointer' style={{background:`${data?"var(--accent)":"var(--muted)"}`}} onClick={Toggle}>
            <div className="bg-background size-4 my-0.5 ml-0.5 transition-all" style={{marginLeft:`${data?"20px":"2px"}`}}></div>
        </div>
    )
}

export default ToggleBtn