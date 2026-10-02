

const HIWCard = ({ pos, title, desc }) => {
  return (
    <div className={`bg-card ${pos === 2 ? "min-[675px]:border-l" : "min-[675px]:border-r"} max-[675px]:border border-border w-68 space-y-2 p-5 max-[675px]:w-full`}>
      <p className="font-mono text-3xl text-accent tracking-wide">0{pos + 1}</p>
      <p className="font-mono text-foreground tracking-wide">{title}</p>
      <p className="text-muted-foreground text-xs tracking-wide">{desc}.</p>
    </div>
  )
}

const Feature = ({ desc }) => {
  return (
    <div className="bg-card border border-border py-3 px-5 flex justify-start items-center space-x-5 w-full">
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
    <div className='pt-20 px-36 max-[850px]:px-18 max-[530px]:px-5'>
      <p className='font-mono text-4xl text-foreground font-bold'>About WebScan</p>
      <div className='text-muted-foreground w-152 max-[950px]:w-132 mt-3 text-justify text-sm max-[675px]:w-full'>WebScan is a lightweight, client-side vulnerability scanner built for security engineers, developers and system administrators who need fast insight into their exposure surface without standing up complex tooling.</div>
      <p className='uppercase text-muted-foreground font-mono text-sm mt-13 mb-4'>how it works</p>

      <div className="flex items-stretch max-[675px]:flex-col">
        {
          CardsData.map((ele, pos) => {
            return <HIWCard pos={pos} title={ele[0]} desc={ele[1]} key={pos}/>
          })
        }
      </div>
      <p className='uppercase text-muted-foreground font-mono text-sm mt-13 mb-4'>features</p>
      <div className="flex items-stretch flex-col w-232 max-[1245px]:w-full">
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