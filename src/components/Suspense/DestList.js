import { GlobalContext } from "@/context/context";
export const DestList = () => {
    const {setIsModal2Showing, setDestinationChain} = GlobalContext()
    const Chains = [
        {
          name: 'Optimism Goerli',
          native : 'ETH',
          logoUrl: 'https://goerli-optimism.etherscan.io/images/svg/brands/main.svg',
          status: 'Active'
        },
        {
          name: 'BNB Testnet',
          native : 'BNB',
          logoUrl: 'https://testnet.bscscan.com/assets/bsc/images/svg/logos/chain-light.svg',
          status: 'Active'
        },
        {
          name: 'Base Goerli',
          native : 'ETH',
          logoUrl: 'https://basescan.org/images/svg/brands/main.svg',
          status: 'Active'
        },
        {
          name: 'Polygon Mumbai',
          native : 'Matic',
          logoUrl: 'https://polygonscan.com/assets/poly/images/svg/logos/chain-light.svg',
          status: 'Active'
        },
        
      ]
    return(
    <div id="modal" className="bg-black/80 w-[100%] mt-[0px] absolute h-[100%] z-[9999999999]">
        <div className=" w-[30%] h-auto py-3 px-3 drop-shadow-glow ml-auto mr-auto text-white  mt-[140px] bg-black/80 rounded-3xl flex flex-col  pt-5 mb-20 ">
            <div className=" w-[95%] ml-auto mr-auto flex h-12 mb-4 py-4 px-4">
                <p className="text-xl ml-0 mr-auto">Select Chain</p>
                <div className="text-xl mr-0 ml-auto">
                <div onClick={() => setIsModal2Showing(false)} className='w-8 h-8 py-1.5 px-1 cursor-pointer hover:bg-green-400/60 cursor-pointer rounded-lg bg-green-400/30'>
                <img src='/icons/home-icon.svg' className='ml-auto mr-auto' />
                </div>
                </div>
            </div>
            <div className="w-[95%] ml-auto mr-auto h-auto  mb-4 py-4 px-4">
                {
                    Chains.map((chain, i) => (
                        <div key={i} className="w-[100%] h-14 ml-auto mr-auto">
                            <div onClick={() => setDestinationChain(chain.name)} className="flex mt-1 mb-1 py-2 px-2 rounded-xl border cursor-pointer border-green-500">
                                <img className="w-8 h-8 ml-5 mr-8" src={chain.logoUrl} alt={chain.native} />
                                <p className="py-1 px-1 font-semibold text-md">{chain.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    )
}