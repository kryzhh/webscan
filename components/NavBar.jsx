import { Link, useLocation } from "react-router"


const AppNav = ({LinkTo,label}) => {
  const loc = useLocation();
  return <Link to={LinkTo}><p className={`text-accent ${loc.pathname===LinkTo?"text-accent":"text-muted-foreground hover:text-foreground"} cursor-pointer transition`}>{label}</p></Link>
}

const NavBar = () => {
  return (
    <div className="font-mono uppercase flex justify-between items-center py-5 px-36 border-b border-border tracking-wide">
        <Link to={"/"}><p className="text-accent opacity-90 hover:opacity-100 transition text-2xl font-semibold cursor-pointer">webscan</p></Link>
        <div className="text-accent flex justify-between items-center gap-x-10">
            {
              ["home","about","license"].map((ele,pos)=>{
                return <AppNav LinkTo={pos===0?"/":`/${ele}`} key={pos} label={ele}/>
              })
            }
            <button className="cursor-pointer uppercase text-foreground hover:text-accent border border-border hover:border-accent px-3 py-0.5 transition">[ light ]</button>
        </div>
    </div>
  )
}

export default NavBar