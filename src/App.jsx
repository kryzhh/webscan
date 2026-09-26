import NavBar from "../components/NavBar"


function App() {
  return (
  <>
  <NavBar/>

  <div className="px-36 pt-20">
    <p className="text-[#f0f0f0] text-4xl font-mono tracking-tight font-semibold">Vulnerability Scanner</p>
    <p className="text-[#888888] mt-5 tracking-wider w-180">Enter an IP address or URL to scan for common security vulnerabilities. Results are for informational purposes only.</p>
  </div>
  </>
  )
}

export default App
