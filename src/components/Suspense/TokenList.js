import { GlobalContext } from "@/context/context";
import { MdOutlineCancel } from "react-icons/md";
export const TokenList = () => {

    const { setIsTokenShowing, setSelectedToken, setFaucetAddress, setSelectedTokenLogo } = GlobalContext()
    const Chains = [
        {
          name: 'CCIP BNM',
          native : 'OP BNM',
          address: '0xaBfE9D11A2f1D61990D1d253EC98B5Da00304F16',
          logoUrl: 'https://goerli-optimism.etherscan.io/images/svg/brands/main.svg',
          status: 'Active'
        },
        {
          name: 'CCIP BNM',
          native : 'Base BNM',
          address: '0xbf9036529123de264bfa0fc7362fe25b650d4b16',
          logoUrl: 'https://goerli.basescan.org/images/svg/brands/main.svg',
          status: 'Active'
        },
        {
          name: 'CCIP BNM',
          native : 'Fuji BNM',
          address: '0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4',
          logoUrl: 'https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/3e4b8ff10b69bfa31e70080a4b142cd0/avalanche-avax-logo.svg',
          status: 'Active'
        },
        {
          name: 'CCIP BNM',
          native : 'Sepolia BNM',
          address: '0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05',
          logoUrl: 'https://sepolia.etherscan.io/images/svg/brands/ethereum-original.svg',
          status: 'Active'
        },
        
      ]
    return(
    <div id="modal" className="bg-black/80 w-[100%] absolute h-[100%] z-[9999999999]">
        <div className="w-[96%] lg:w-[30%] h-auto py-3 px-3 drop-shadow-glow ml-auto mr-auto text-white  mt-[230px] bg-black/80 rounded-3xl flex flex-col  pt-5 mb-20 ">
            <div className=" w-[95%] ml-auto flex mr-auto h-12 mb-4 py-4 px-4">
            <p className="text-xl ml-0 mr-auto">Select Token</p>
                <div className="text-xl mr-0 ml-auto">
                <div onClick={() => {
                  setIsTokenShowing(false)
                  
                }
                  } className='w-8 h-8 py-1.5 px-1 hover:bg-green-400/60 cursor-pointer rounded-lg bg-green-400/30'>
                <MdOutlineCancel className='ml-auto mr-auto' />
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