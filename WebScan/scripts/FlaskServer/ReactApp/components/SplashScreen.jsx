import { useEffect } from "react"
import { useNavigate } from "react-router";




const SplashScreen = () => {
  const nav = useNavigate();
  useEffect(() => {
    document.addEventListener("keydown", () => {
      nav("/home")
    });
    document.addEventListener("mousedown", (event) => {
      nav("/home")
    });


    setTimeout(() => {
      nav("/home")
    }, 2000);
  }, [])

  return (
    <div className="h-screen flex justify-center items-center">
      <div className='font-mono tracking-widest'>
        <div className='flex items-center text-7xl font-bold'>
          <p className='text-accent tracking-widest'>WEB</p><p className='text-foreground tracking-widest'>SCAN</p>
        </div>
        <p className='uppercase text-muted-foreground text-sm text-center mt-4'>vulnerability scanner</p>
        <p className='uppercase text-muted-foreground text-sm text-center mt-16 animate-pulse'>— click anywhere to continue —</p>
      </div>
    </div>
  )
}

export default SplashScreen