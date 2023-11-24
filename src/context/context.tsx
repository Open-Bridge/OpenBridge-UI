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
  const [originChain, setOriginChain] = useState("Select Chain");
  const [destinationChain, setDestinationChain] = useState('Select Chain')
  const [selectedToken, setSelectedToken] = useState("Select Token");
  const [selectedTokenLogo, setSelectedTokenLogo] = useState("");



  const [selectedTab, setSelectedTab] = useState("presale");
  const [error, setError] = useState("");

  const value = {
        isModalShowing,
        isModal2Showing,
        isTokenShowing,
        originChain,
        destinationChain,
        selectedTokenLogo,
        selectedToken,
        setIsModalShowing,
        setIsModal2Showing,
        setIsTokenShowing,
        setOriginChain,
        setSelectedTokenLogo,
        setDestinationChain,
        setSelectedToken
  };

    return (
    <BridgeContext.Provider value={value}>
      {children}
    </BridgeContext.Provider>
  );
}

export const GlobalContext = () => useContext(BridgeContext);
