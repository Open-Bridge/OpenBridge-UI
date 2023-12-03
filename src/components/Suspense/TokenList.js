import { GlobalContext } from "@/context/context";
export const TokenList = () => {

    const { setIsTokenShowing, setSelectedToken, setFaucetAddress, setSelectedTokenLogo } = GlobalContext()
    const Chains = [
        {
          name: 'CCIP BNM',
          native : 'BNM',
          address: '0xaBfE9D11A2f1D61990D1d253EC98B5Da00304F16',
          logoUrl: 'https://goerli-optimism.etherscan.io/images/svg/brands/main.svg',
          status: 'Active'
        },
        {
          name: 'CCIP LNM',
          native : 'LNM',
          address: '0x835833d556299cdec623e7980e7369145b037591',
          logoUrl: 'https://testnet.bscscan.com/assets/bsc/images/svg/logos/chain-light.svg',
          status: 'Active'
        }
      ]
    return(
    <div id="modal" className="bg-black/80 w-[100%] absolute h-[100%] z-[9999999999]">
        <div className=" w-[30%] h-auto py-3 px-3 drop-shadow-glow ml-auto mr-auto text-white  mt-[140px] bg-black/80 rounded-3xl flex flex-col  pt-5 mb-20 ">
            <div className=" w-[95%] ml-auto flex mr-auto h-12 mb-4 py-4 px-4">
            <p className="text-xl ml-0 mr-auto">Select Token</p>
                <div className="text-xl mr-0 ml-auto">
                <div onClick={() => {
                  setIsTokenShowing(false)
                  
                }
                  } className='w-8 h-8 py-1.5 px-1 hover:bg-green-400/60 cursor-pointer rounded-lg bg-green-400/30'>
                <img src='/icons/home-icon.svg' className='ml-auto mr-auto' />
                </div>
                </div>
            </div>
            <div className="w-[95%] ml-auto mr-auto h-auto  mb-4 py-4 px-4">
                {
                    Chains.map((chain, i) => (
                        <div key={i} className="w-[100%] h-14 ml-auto mr-auto">
                            <div onClick={() => {
                               setSelectedToken(chain.native);
                               setSelectedTokenLogo(chain.logoUrl)
                               setFaucetAddress(chain.address)
                               setIsTokenShowing(false)
                            } } className="flex mt-1 mb-1 py-2 px-2 cursor-pointer rounded-xl border border-green-500">
                                <img className="w-8 h-8 ml-5 mr-8" src={chain.logoUrl} alt={chain.native} />
                                <p className="py-1 px-1 font-semibold text-md">{chain.native}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    )
}