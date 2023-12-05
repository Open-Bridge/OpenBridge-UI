import { GlobalContext } from "@/context/context";
import { useNetwork, useAccount } from "wagmi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const MoreDetails = () => {
  const { chain } = useNetwork()
  const { address } = useAccount()
  const { expandDetails, setExpandDetails ,amount, destinationChain} = GlobalContext();
  return (
    <div>
      <div
        className={`bg-gray-50 block  border ${expandDetails &&
          "h-[190px]"}  border-gray-300 text-gray-900 text-sm outline-none rounded-lg h-12  focus:ring-green-500 focus:border-green-500 w-[98%] p-2.5 dark:bg-green-400/30 dark:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      >
        <div className="flex mb-0 w-[100%]">
          <div className="flex py-1 px-1 ml-3 mr-auto">
            <div className=" flex">
              <p className="ml-1 mr-1">Additional Details</p>
            </div>
          </div>
          <div
            onClick={() => setExpandDetails(!expandDetails)}
            className="mr-1 ml-auto py-1 px-1"
          >
            {expandDetails ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
        </div>
        <div className={`block ${!expandDetails && "hidden"} mt-2 w-[95%] ml-auto mr-auto`}>
          <div className={`flex mt-1  w-[100%]`}>
            <div className="flex py-1 px-1 ml-3 mr-auto">
              <div className=" flex">
                <p className="ml-1 mr-1">Bridging amount:</p>
              </div>
            </div>
            <div
              onClick={() => setExpandDetails(!expandDetails)}
              className="mr-1 ml-auto py-1 px-1"
            >
              {`${amount}`}
            </div>
          </div>
          <div className={`flex mt-1  w-[100%]`}>
            <div className="flex py-1 px-1 ml-3 mr-auto">
              <div className=" flex">
                <p className="ml-1 mr-1">Destination Chain:</p>
              </div>
            </div>
            <div
              onClick={() => setExpandDetails(!expandDetails)}
              className="mr-1 ml-auto py-1 px-1"
            >
              {`${destinationChain}`}
            </div>
          </div>
          <div className={`flex mt-1  w-[100%]`}>
            <div className="flex py-1 px-1 ml-3 mr-auto">
              <div className=" flex">
                <p className="ml-1 mr-1">Address:</p>
              </div>
            </div>
            <div
              onClick={() => setExpandDetails(!expandDetails)}
              className="mr-1 ml-auto py-1 px-1"
            >
              {`${address}`}
            </div>
          </div>
          <div className={`flex mt-1  w-[100%]`}>
            <div className="flex py-1 px-1 ml-3 mr-auto">
              <div className=" flex">
                <p className="ml-1 mr-1">Router Fees:</p>
              </div>
            </div>
            <div
              onClick={() => setExpandDetails(!expandDetails)}
              className="mr-1 ml-auto py-1 px-1"
            >
              {`$- ${0.033}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
