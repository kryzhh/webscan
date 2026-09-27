

const HIWCard = ({ pos, title, desc }) => {
  return (
    <div className={`bg-card ${pos === 2 ? "border-l" : "border-r"} border-border w-fit space-y-2 p-5`}>
      <p className="font-mono text-3xl text-accent tracking-wide">0{pos + 1}</p>
      <p className="font-mono text-foreground tracking-wide">{title}</p>
      <p className="text-muted-foreground text-xs w-64 tracking-wide">{desc}.</p>
    </div>
  )
}

const Feature = ({ desc }) => {
  return (
    <div className="bg-card border border-border py-3 px-5 flex justify-start items-center space-x-5">
      <p className="text-accent">{">"}</p>
      <p className="text-foreground tracking-wide">{desc}</p>
    </div>
  )
}

const About = () => {
  const CardsData = [
    ["Enter Target", "Provide an IP address or URL as the scan target"],
    ["Configure Scan", "Optionally enable SSL/TLS analysis for certificate and cipher checks"],
    ["View Results", "Review flagged issues with details and actionable remediation steps"]
  ];
  const features = [
    "Works across multiple platforms, including Windows and Linux",
    "Scans web servers for potential vulnerabilities using Nikto",
    "Provides a user-friendly GUI built with Python and React",
    "Uses Docker/Podman for isolated and reliable scanning",
    "No account required. Runs directly in your browser",
    "Supports scanning web servers on a local network",
  ]

  return (
    <div className='pt-20 px-36'>
      <p className='font-mono text-4xl text-foreground font-bold'>About WebScan</p>
      <p className='text-muted-foreground mt-3 w-176 text-justify'>WebScan is a lightweight, client-side vulnerability scanner built for security engineers, developers and system administrators who need fast insight into their exposure surface without standing up complex tooling.</p>
      <p className='uppercase text-muted-foreground font-mono text-sm mt-13 mb-4'>how it works</p>

      <div className="flex justify-start items-center">
        {
          CardsData.map((ele, pos) => {
            return <HIWCard pos={pos} title={ele[0]} desc={ele[1]} />
          })
        }
      </div>
      <p className='uppercase text-muted-foreground font-mono text-sm mt-13 mb-4'>features</p>
      <div className="w-3/4">
        {
          features.map((ele, pos) => {
            return <Feature key={pos} desc={ele} />
          })
        }
      </div>
    </div>
  )
}

export default About