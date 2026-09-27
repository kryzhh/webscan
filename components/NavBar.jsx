import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router"


const AppNav = ({ LinkTo, label }) => {
  const loc = useLocation();
  return <Link to={LinkTo}><p className={`text-accent ${loc.pathname === LinkTo ? "text-accent" : "text-muted-foreground hover:text-foreground"} cursor-pointer transition`}>{label}</p></Link>
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
    <div className={`font-mono uppercase ${loc.pathname==="/"?"hidden":"flex"} justify-between items-center py-5 px-36 border-b border-border tracking-wide`}>
      <Link to={"/home"}><p className="text-accent opacity-90 hover:opacity-100 transition text-2xl font-semibold cursor-pointer">webscan</p></Link>
      <div className="text-accent flex justify-between items-center gap-x-10">
        {
          ["home", "about", "license"].map((ele, pos) => {
            return <AppNav LinkTo={`/${ele}`} key={pos} label={ele} />
          })
        }
        <button className="cursor-pointer uppercase text-foreground hover:text-accent border border-border hover:border-accent px-3 py-0.5 transition" onClick={toggleTheme}>[ {ThemeText} ]</button>
      </div>
    </div>
  )
}

export default NavBar