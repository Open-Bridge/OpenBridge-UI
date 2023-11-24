"use client";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

export const BridgeContext = createContext({
    BridgeContext: null
})

export function BridgeContextProvider ({children}) {
    const [chainSelect, setChainSelect] = useState('BNB')

    useEffect(() => {
      if (chainSelect) {
        localStorage.setItem("chain", chainSelect);
      }
    },
    [chainSelect])
    const value = {
        chainSelect,
    }
    return (
        <BridgeContext.Provider value={value}>
          {children}
        </BridgeContext.Provider>
    )
}

export const GlobalContext = () => useContext(BridgeContext);
