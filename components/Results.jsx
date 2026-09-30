import VulCard from './VulCard'

const Results = () => {
  return (
    <>
      <p className='text-muted-foreground font-mono uppercase tracking-widest mb-4'>— n issues found —</p>
      <div  className='max-h-100 overflow-y-scroll pr-5'>
        <VulCard />
        <VulCard />
        <VulCard />
        <VulCard />
        <VulCard />
        <VulCard />
        <VulCard />
      </div>
    </>
  )
}

export default Results