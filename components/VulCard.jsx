import React from 'react'

const VulCard = () => {
  return (
    <div className='border border-border bg-card my-2 flex justify-between items-center p-5'>
        <p className='text-foreground'>Open Port 22 — SSH Exposed</p>
        <button className="text-accent uppercase font-mono cursor-pointer border border-accent hover:bg-accent hover:text-accent-foreground transition-all text-sm py-1 px-3">view fix</button>
    </div>
  )
}

export default VulCard