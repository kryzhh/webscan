import Form from "../components/Form"


function App() {
  return (
  <>

  <div className="px-36 pt-20">
    <p className="text-foreground text-4xl font-mono tracking-tight font-semibold">Vulnerability Scanner</p>
    <p className="text-muted-foreground mt-5 tracking-wider w-180">Enter an IP address or URL to scan for common security vulnerabilities. Results are for informational purposes only.</p>

    <Form/>
    <div className="min-h-38">

    </div>
  </div>
  </>
  )
}

export default App
