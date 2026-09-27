import { useLocation } from 'react-router'

const Footer = () => {
  const loc = useLocation();
  return (
    <div className={`text-muted-foreground ${loc.pathname==="/"?"hidden":"flex"} justify-between w-full px-36 py-5 text-sm font-mono border-t border-border mt-20`}>
        <p>{"WEBSCAN v1.0.0"}</p>
        <p>MIT License · Use responsibly</p>
    </div>
  )
}

export default Footer