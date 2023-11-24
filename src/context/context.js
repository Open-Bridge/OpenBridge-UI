"use client";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

export const BridgeContext = createContext({
    
})

export function BridgeContextProvider ({children}) {
    //modals
    const [chainSelect,setChainSelect] = useState('');
    const [openChainModal, setOpenChainModal] = useState(true);
    const [openTokenModal, setOpenTokenModal] = useState(false);


    useEffect(() => {
      if (chainSelect) {
        localStorage.setItem("chain", chainSelect);
      }
    },
    [chainSelect])
    const value = {
        chainSelect,
        openChainModal,
        openTokenModal,
        setChainSelect,
        setOpenTokenModal,
        setOpenChainModal
    }
    return (
        <BridgeContext.Provider value={value}>
          {children}
        </BridgeContext.Provider>
    )
}

export const GlobalContext = () => useContext(BridgeContext);
