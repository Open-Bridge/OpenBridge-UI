'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  midnightTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  sepolia,
  polygonMumbai,
  bscTestnet,
  baseGoerli,
  optimismGoerli,
} from 'wagmi/chains';

import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, publicClient } = configureChains(
  [sepolia, baseGoerli, optimismGoerli, polygonMumbai ],
  [
    //alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'OpenBridge V2',
  projectId: 'fa7b299471fa848b2dc52a5e1529ac37',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function EthProvider({children}) {
	return (
      <WagmiConfig config={wagmiConfig}>
		<RainbowKitProvider
		       chains={chains}
			   theme={midnightTheme()}
			   coolMode
		>
         {children}
		</RainbowKitProvider>
	  </WagmiConfig> 
	  )
}