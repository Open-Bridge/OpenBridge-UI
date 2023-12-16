export const Footer = () => {
    return (
    <div className="w-[100%] flex text-base drop-shadow-glow bg-transparent">
        <div className="ml-8 flex mr-auto py-1 px-1">
            <p className="flex text-md px-1 py-3.5">Built with</p>
            <img className="h-12 w-28  " src="https://docs.chain.link/assets/icons/chainlink-logo.svg"/>
            <p className="flex text-md px-1 py-3.5"> CCIP</p>
        </div>
        
        <div className="ml-auto mr-8 py-1 px-1">
            <p className="px-1 bg-transparent py-3.5">© 2023 made with ❤️ by OpenBridge Team.</p>
        </div>
    </div>
    )
}