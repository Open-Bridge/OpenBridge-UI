import { GlobalContext } from "@/context/context";
import { parseEther } from "viem"; 
import { useNetwork } from 'wagmi'
import { CircleLoader } from "react-spinners";
import { MdOutlineCancel } from "react-icons/md";
import { usePrepareContractWrite, useContractWrite, useAccount } from 'wagmi'
import { BNM, Bridge, FeeToken } from "../../config/TokenData";
import { Opbridge, Basebridge, fujibridge, Sepoliabridge, OpLink, SepoliaLink, FujiLink, BaseLink } from "../../config/add";
export const ApproveModal = () => {
  const { address} = useAccount()
  const {
    setIsTokenShowing,
    destinationChainID,
    setSelectedToken,
    setFaucetAddress,
    selectedToken,
    amount,
    faucetAddress,
    setSelectedTokenLogo,
    setIsApproveModal,
  } = GlobalContext();
  
  const { chain } = useNetwork()
  const activeChainId = chain?.id
  const getBridgeAddress = (activeChainId) => {
    if (activeChainId === 420) {
      const OpAddress = Opbridge.address;
      return OpAddress;
    }
    if (activeChainId === 84531) {
      const BaseAddress = Basebridge.address;
      return BaseAddress;
    }
    if (activeChainId === 11155111) {
      const SepoliaAddress = Sepoliabridge.address;
      return SepoliaAddress;
    }
    if (activeChainId === 43113) {
      const fujiAddress = fujibridge.address;
      return fujiAddress;
    }
  }

  const getLinkAddress = (activeChainId) => {
    
    if (activeChainId === 420) {
      const OpLinkAddress = OpLink.address;
      return OpLinkAddress;
    }
    if (activeChainId === 84531) {
      const BaseLinkAddress = BaseLink.address;
      return BaseLinkAddress;
    }
    if (activeChainId === 11155111) {
      const SepoliaLinkAddress = SepoliaLink.address;
      return SepoliaLinkAddress;
    }
    if (activeChainId === 43113) {
      const fujiLinkAddress = FujiLink.address;
      return fujiLinkAddress;
    }
  }

  const getDestinationId = (destinationChainID) => {
        if(destinationChainID === 84531) {
          const BaseId = '5790810961207155433'
          return BaseId;
        }
        if(destinationChainID === 11155111) {
          const SepoliaId  = '16015286601757825753'
          return SepoliaId;
        }
        if(destinationChainID === 43113) {
          const MumbaiId = '14767482510784806043'
          return MumbaiId;
        }
        if(destinationChainID === 420) {
          const MumbaiId = '2664363617261496610'
          return MumbaiId;
        }
        return undefined
  }
  console.log(getDestinationId(84531))
  const feeAmount = 1500000000000000000;
  const { config } = usePrepareContractWrite({
    address: faucetAddress,
    abi: BNM.abi  ,
    functionName:'approve' ,
    args: [
      getBridgeAddress(activeChainId),
      amount
    ],
  })
  const { config:feeToken } = usePrepareContractWrite({
    address: getLinkAddress(activeChainId),
    abi: FeeToken.abi  ,
    functionName:'approve' ,
    args: [
      getBridgeAddress(activeChainId),
      feeAmount
    ],
  })
  const { config:bridge } = usePrepareContractWrite({
    address: getBridgeAddress(activeChainId),
    abi: Opbridge.abi  ,
    functionName:'transferTokensPayLINK' ,
    args: [
      getDestinationId(destinationChainID),
      address,
      faucetAddress,
      amount
    ] ,
  })
  const {data:feeD , write:feeA } = useContractWrite(feeToken)
  const {data , isLoading:brLoading, isSuccess:brSucces, write:cross, isError:bridgeerror} = useContractWrite(bridge)
  const {data:bnmdata , isError , write , isLoading:bnmLoading , error, isSuccess:bnmSuccess } = useContractWrite(config)
  const handleT = async () => {
    await feeA?.();
    await write?.();
  }
  const handleC = async () => {
    await cross?.()
  }

  return (
    <div
      id="modal"
      className="bg-black/80 w-[100%] absolute h-[100%] z-[9999999999]"
    >
      <div className="w-[90%] lg:w-[30%] h-auto py-3 px-3 drop-shadow-glow ml-auto mr-auto text-white  mt-[140px] bg-black/80 rounded-3xl flex flex-col  pt-5 mb-20 ">
        <div className=" w-[95%] ml-auto flex mr-auto h-12 mb-4 py-4 px-4">
          <p className="text-xl ml-0 mr-auto">{`Transfer`}</p>
          <div className="text-xl mr-0 ml-auto">
            <div
              onClick={() => {
                setIsApproveModal(false);
              }}
              className="w-8 h-8 py-1.5 px-1 hover:bg-green-400/60 cursor-pointer rounded-lg bg-green-400/30"
            >
              <MdOutlineCancel className="ml-auto mr-auto" />
            </div>
          </div>
        </div>
        {!bnmSuccess ? (
          <div className="w-[95%] ml-auto mr-auto h-auto  mb-4 py-4 px-4">
            {!bnmLoading && (
              <div className="w-[100%] h-20">
                <p className="w-[68%] text-center ml-auto mr-auto h-16  mb-4">
                  {`You need to Approve ${amount} of ${selectedToken} token with Link token which serves as the Router Fees to Cross Chain`}{" "}
                </p>
              </div>
            )}
            {bnmLoading && (
              <div className="w-[100%] h-20">
                <p className="w-[68%] text-center ml-auto mr-auto h-16  mb-4">
                 <CircleLoader className="ml-auto mr-auto mt-1" color="#36d7b7" />
                </p>
              </div>
            )}
            <div className="w-[100%] mt-8 flex">
              <button
                onClick={() => {
                  //alert('Clicked')
                  handleT();
                  setIsApproveModal(true);
                }}
                className="w-[100%] bg-green-500/70 h-12 rounded-xl cursor-pointer ml-auto mr-auto"
              >
                {bnmLoading ? 'Approving...' : 'Approve'}
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[95%] ml-auto mr-auto h-auto  mb-4 py-4 px-4">
            {!brLoading && !brSucces && (
              <div className="w-[100%] h-auto">
                <p className="w-[68%] text-center ml-auto mr-auto h-16  mb-4">
                  {`You Succesfully Approve ${amount} of ${selectedToken} token Please Proceed to Cross Chain`}{" "}
                </p>
              </div>
            )}
            {brLoading && (
              <div className="w-[100%] h-auto">
                <p className="w-[68%] text-center ml-auto mr-auto h-16  mb-4">
                  <CircleLoader className="ml-auto m-auto mt-1" color="#36d7b7" />
                </p>
              </div>
            )}
            {brSucces && (
              <div className="w-[100%] h-auto">
                <p className="w-[68%] text-center ml-auto mr-auto h-16  mb-4">
                  {`Done`}{" "}
                </p>
              </div>
            )}
            <div className="w-[100%] mt-8 flex">
              {
                brSucces ? 
                <button
                onClick={() => {
                  
                  setIsApproveModal(false);
                }}
                className="w-[100%] bg-green-500/70 h-12 rounded-xl cursor-pointer ml-auto mr-auto"
              >
                {'Back to Home'}
              </button> 
              : 
              <button
                onClick={() => {
                  alert('Cross');
                  handleC()
                  setIsApproveModal(true);
                }}
                className="w-[100%] bg-green-500/70 h-12 rounded-xl cursor-pointer ml-auto mr-auto"
              >
                {brLoading ? 'Bridging...' : 'Bridge'}
              </button>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
