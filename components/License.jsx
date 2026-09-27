const LicenseText = () => {
  return <div className="text-muted-foreground font-mono bg-card border border-border tracking-wider px-7 py-10 text-justify">
    <p className="text-foreground">Copyright (c) 2024 Krish Mishra</p>
    <br />
    <p>Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:</p>
    <br />
    <p>The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.</p>
    <hr className="my-4 border border-border"/>
    <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.</p>
  </div>
}
const Disclaimer = () => {
  return <div className="text-muted-foreground bg-muted border border-border mt-7 text-sm px-7 py-5 tracking-wider">
    <p className="uppercase font-mono mb-3">disclaimer</p>
    <p>WebScan is intended for use on systems and networks you own or have explicit written permission to test. Unauthorized scanning of systems is illegal and unethical. The authors accept no liability for misuse.</p>
  </div>
}

const License = () => {
  return (
    <div className="px-36 pt-20">
      <div className="mb-10">
        <p className="font-mono text-foreground text-4xl font-bold">License</p>
        <p className="font-mono text-muted-foreground mt-1 text-sm">MIT License — WebScan</p>
      </div>
      <LicenseText />
      <Disclaimer />
    </div>
  )
}

export default License