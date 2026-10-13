import { useContext } from 'react';
import VulCard from './VulCard'
import ContextInit from '../context/ContextInit';

const Results = () => {
  const { Logs,Loading } = useContext(ContextInit);
  return (
    <div className={Loading || !Array.isArray(Logs)?"hidden":""}>
      <p className='text-muted-foreground font-mono uppercase tracking-widest mb-4'>— {Array.isArray(Logs)?Logs.length:""} issues found —</p>
      <div className='max-h-100 overflow-y-scroll pr-5'>
        {
          Array.isArray(Logs)?Logs.map((ele, pos) => {
            return <VulCard text={ele} key={pos} />
          }):""
        }
      </div>
    </div>
  )
}

export default Results