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
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
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
			   theme={darkTheme()}
			   coolMode
		>
         {children}
		</RainbowKitProvider>
	  </WagmiConfig> 
	  )
}