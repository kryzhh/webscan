

const NavBar = () => {
  return (
    <div className="font-mono uppercase flex justify-between items-center py-5 px-36 border border-[#2a2a2a]">
        <p className="text-[#00cc44] opacity-90 hover:opacity-100 transition text-xl tracking-wide font-semibold cursor-pointer">webscan</p>
        <div className="text-[#00cc44] flex justify-between items-center gap-x-10">
            <p className="text-[#00cc44] cursor-pointer">home</p>
            <p className="text-[#888888] hover:text-[#f0f0f0] cursor-pointer transition">about</p>
            <p className="text-[#888888] hover:text-[#f0f0f0] cursor-pointer transition">license</p>
            {/* #2a2a2a */}
            <button className="cursor-pointer uppercase text-[#f0f0f0] hover:text-[#00cc44] border border-[#2a2a2a] hover:border-[#00cc44] px-3 py-0.5 transition">[ light ]</button>
        </div>
    </div>
  )
}

export default NavBar