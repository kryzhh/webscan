import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router"


const AppNav = ({ LinkTo, label }) => {
  const loc = useLocation();
  return <Link to={LinkTo} className="max-[675px]:hidden"><p className={`text-accent ${loc.pathname === LinkTo ? "text-accent" : "text-muted-foreground hover:text-foreground"} cursor-pointer transition`}>{label}</p></Link>
}

const Hamburger = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--foreground)" className="size-6 border border-border p-1 min-[675px]:hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" className="hidden"/>
      </svg>
    </>

  )

}

const NavBar = () => {
  const loc = useLocation();
  const [ThemeText, setThemeText] = useState("light")

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (typeof theme === "string") {
      if (theme === "light") {
        document.documentElement.className = "light"
        localStorage.setItem("theme", "light")
        setThemeText("dark")
      }
      else {
        document.documentElement.className = "dark"
        localStorage.setItem("theme", "dark")
        setThemeText("light")
      }
    }
    else {
      localStorage.setItem("theme", "dark")
    }
  }, [])


  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.documentElement.className = "dark"
      localStorage.setItem("theme", "dark")
      setThemeText("light")
    }
    else {
      document.documentElement.className = "light"
      localStorage.setItem("theme", "light")
      setThemeText("dark")
    }
  }

  return (
    <div className={`font-mono uppercase ${loc.pathname === "/" ? "hidden" : "flex"} justify-between items-center py-5 px-36 border-b border-border tracking-wide max-[850px]:px-18 max-[530px]:px-5`}>
      <Link to={"/home"}><p className="text-accent opacity-90 hover:opacity-100 transition text-2xl font-semibold cursor-pointer">webscan</p></Link>
      <div className="text-accent flex justify-between items-center space-x-10 max-[350px]:space-x-3">
        {
          ["home", "about", "license"].map((ele, pos) => {
            return <AppNav LinkTo={`/${ele}`} key={pos} label={ele} />
          })
        }
        <button className="cursor-pointer uppercase text-foreground hover:text-accent border border-border hover:border-accent px-3 py-0.5 transition max-[350px]:text-sm" onClick={toggleTheme}>[ {ThemeText} ]</button>
        <Hamburger />
      </div>
    </div>
  )
}

export default NavBar