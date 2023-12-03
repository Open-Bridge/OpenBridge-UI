"use client";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

export const BridgeContext = createContext<any>({
 
});

type Props = {
  children: ReactNode;
};



export function BridgeContextProvider({ children }: Props) {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [isModal2Showing, setIsModal2Showing] = useState(false);
  const [isTokenShowing, setIsTokenShowing] = useState(false);
  const [isNFTList, setIsNFTList] = useState(false);
  const [isApproveModal, setIsApproveModal] = useState(false);
  const [originChain, setOriginChain] = useState("Select Chain");
  const [destinationChain, setDestinationChain] = useState('Select Chain')
  const [claimAddress, setClaimAddress] = useState('')
  const [destinationChainID, setDestinationChainID] = useState(0)
  const [selectedToken, setSelectedToken] = useState("Select Token");
  const [selectedNFT, setSelectedNFT] = useState('Select Collection');
  const [selectedNFTLogo, setSelectedNFTLogo] = useState('/icons/coin.svg');
  const [selectedTokenLogo, setSelectedTokenLogo] = useState("/icons/coin.svg");
  const [expandDetails, setExpandDetails] = useState(false);
  const [amount, setAmount] = useState(0);
  const [faucetAddress, setFaucetAddress] = useState('');
  const [isSettingModal, setIsSettingModal] = useState(false)



  const [selectedTab, setSelectedTab] = useState("presale");
  const [error, setError] = useState("");

  const value = {
        isModalShowing,
        isModal2Showing,
        isTokenShowing,
        isNFTList,
        originChain,
        destinationChain,
        destinationChainID,
        selectedTokenLogo,
        selectedToken,
        selectedNFT,
        selectedNFTLogo,
        faucetAddress,
        expandDetails,
        claimAddress,
        isApproveModal,
        amount,
        isSettingModal,

        setIsSettingModal,
        setIsModalShowing,
        setIsModal2Showing,
        setExpandDetails,
        setIsTokenShowing,
        setIsNFTList,
        setOriginChain,
        setSelectedTokenLogo,
        setDestinationChainID,
        setDestinationChain,
        setSelectedToken,
        setSelectedNFT,
        setFaucetAddress,
        setSelectedNFTLogo,
        setClaimAddress,
        setIsApproveModal,
        setAmount
  };

    return (
    <BridgeContext.Provider value={value}>
      {children}
    </BridgeContext.Provider>
  );
}

export const GlobalContext = () => useContext(BridgeContext);
