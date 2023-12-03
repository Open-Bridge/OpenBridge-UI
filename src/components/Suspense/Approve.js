import { GlobalContext } from "@/context/context";
import { parseEther } from "viem";
import { usePrepareContractWrite, useContractWrite, useAccount } from 'wagmi'
import { BNM, Bridge, FeeToken } from "../../config/TokenData";
import { bridger } from "../../config/add";
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
  
  const getDestinationId = (destinationChainID) => {
        if(destinationChainID === 84531) {
          const BaseId = '5790810961207155433'
          return BaseId;
        }
        if(destinationChainID === 11155111) {
          const SepoliaId  = '16015286601757825753'
          return SepoliaId;
        }
        if(destinationChainID === 80001) {
          const MumbaiId = '12532609583862916517'
          return MumbaiId;
        }
        return undefined
  }
  console.log(getDestinationId(84531))
  const feeAmount = 500000000000000000;
  const { config } = usePrepareContractWrite({
    address: faucetAddress,
    abi: BNM.abi  ,
    functionName:'approve' ,
    args: [
      bridger.address,
      amount
    ],
  })
  const { config:feeToken } = usePrepareContractWrite({
    address: FeeToken.address,
    abi: FeeToken.abi  ,
    functionName:'approve' ,
    args: [
      bridger.address,
      feeAmount
    ],
  })
  const { config:bridge } = usePrepareContractWrite({
    address: bridger.address,
    abi: bridger.abi  ,
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
    await write?.();
    await feeA?.()
    //alert('Hey')
  }
  const handleC = async () => {
    //alert('crossing')
    await cross?.()
    //alert('crossed')
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
              <img src="/icons/home-icon.svg" className="ml-auto mr-auto" />
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
                  {`Approving...`}{" "}
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
                {bnmLoading ? 'Loading...' : 'Approve'}
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
                  {`Approving...`}{" "}
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
                {brLoading ? 'Loading' : 'Bridge'}
              </button>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
