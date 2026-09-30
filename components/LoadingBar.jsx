

const LoadingBar = () => {
    return (
        <>
            <p className="text-muted-foreground font-mono text-sm mb-2">Scanning...</p>
            <div className="w-4/5 h-0.5 bg-border overflow-hidden">
                <div className="w-1/3 h-full bg-accent animate-slide" ></div>
            </div>
        </>
    )
}

export default LoadingBar