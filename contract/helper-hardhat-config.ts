export interface NetworkConfigItem {
  blockConfirmations?: number
}

export interface NetworkConfigInfo {
  [key: string]: NetworkConfigItem
}

export const networkConfig: NetworkConfigInfo = {
  localhost: {},
  hardhat: {},
  sepolia: {
    blockConfirmations: 6,
  },
  goerli: {
    blockConfirmations: 6,
  },
  optimism_Goerli: {
    blockConfirmations: 6,
  },
  avalanche_Fuji: {
    blockConfirmations: 6,
  },
}
export const ROUTER: string = "0xd0daae2231e9cb96b94c8512223533293c3693bf" //Mumbai = 0x70499c328e1e2a3c41108bd3730f6670a44595d1
export const LINK: string = "0x779877A7B0D9E8603169DdbD7836e478b4624789" //Mumbai = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB

interface CCIPInterface {
    SupportedNetworks: {
        ETHEREUM_SEPOLIA: string;
        OPTIMISM_GOERLI: string;
        AVALANCHE_FUJI: string;
        ARBITRUM_GOERLI: string;
        POLYGON_MUMBAI: string;
    };

    networks: Record<string, string>;

    PayFeesIn: {
        Native: string;
        LINK: string;
    };

    chainIdEthereumSepolia: number;
    chainIdOptimismGoerli: number;
    chainIdAvalancheFuji: number;
    chainIdArbitrumTestnet: number;
    chainIdPolygonMumbai: number;

    routerEthereumSepolia: string;
    routerOptimismGoerli: string;
    routerAvalancheFuji: string;
    routerArbitrumTestnet: string;
    routerPolygonMumbai: string;

    linkEthereumSepolia: string;
    linkOptimismGoerli: string;
    linkAvalancheFuji: string;
    linkArbitrumTestnet: string;
    linkPolygonMumbai: string;

    wethEthereumSepolia: string;
    wethOptimismGoerli: string;
    wavaxAvalancheFuji: string;
    wethArbitrumTestnet: string;
    wmaticPolygonMumbai: string;

    ccipBnMEthereumSepolia: string;
    ccipBnMOptimismGoerli: string;
    ccipBnMArbitrumTestnet: string;
    ccipBnMAvalancheFuji: string;
    ccipBnMPolygonMumbai: string;

    ccipLnMEthereumSepolia: string;
    clCcipLnMOptimismGoerli: string;
    clCcipLnMArbitrumTestnet: string;
    clCcipLnMAvalancheFuji: string;
    clCcipLnMPolygonMumbai: string;

    init: () => void;

    getDummyTokensFromNetwork: (
        network: string
    ) => [string, string] | undefined;

    getConfigFromNetwork: (
        network: string
    ) => [string, string, string, number] | undefined;
}

const CCIPNetworks: CCIPInterface = {
    SupportedNetworks: {
        ETHEREUM_SEPOLIA: "Ethereum Sepolia",
        OPTIMISM_GOERLI: "Optimism Goerli",
        AVALANCHE_FUJI: "Avalanche Fuji",
        ARBITRUM_GOERLI: "Arbitrum Goerli",
        POLYGON_MUMBAI: "Polygon Mumbai",
    },

    networks: {},

    PayFeesIn: {
        Native: "Native",
        LINK: "LINK",
    },

    chainIdEthereumSepolia: 16015286601757825753,
    chainIdOptimismGoerli: 2664363617261496610,
    chainIdAvalancheFuji: 14767482510784806043,
    chainIdArbitrumTestnet: 6101244977088475029,
    chainIdPolygonMumbai: 12532609583862916517,

    routerEthereumSepolia: "0xD0daae2231E9CB96b94C8512223533293C3693Bf",
    routerOptimismGoerli: "0xEB52E9Ae4A9Fb37172978642d4C141ef53876f26",
    routerAvalancheFuji: "0x554472a2720E5E7D5D3C817529aBA05EEd5F82D8",
    routerArbitrumTestnet: "0x88E492127709447A5ABEFdaB8788a15B4567589E",
    routerPolygonMumbai: "0x70499c328e1E2a3c41108bd3730F6670a44595D1",

    linkEthereumSepolia: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    linkOptimismGoerli: "0xdc2CC710e42857672E7907CF474a69B63B93089f",
    linkAvalancheFuji: "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846",
    linkArbitrumTestnet: "0xd14838A68E8AFBAdE5efb411d5871ea0011AFd28",
    linkPolygonMumbai: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",

    wethEthereumSepolia: "0x097D90c9d3E0B50Ca60e1ae45F6A81010f9FB534",
    wethOptimismGoerli: "0x4200000000000000000000000000000000000006",
    wavaxAvalancheFuji: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
    wethArbitrumTestnet: "0x32d5D5978905d9c6c2D4C417F0E06Fe768a4FB5a",
    wmaticPolygonMumbai: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",

    ccipBnMEthereumSepolia: "0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05",
    ccipBnMOptimismGoerli: "0xaBfE9D11A2f1D61990D1d253EC98B5Da00304F16",
    ccipBnMArbitrumTestnet: "0x0579b4c1C8AcbfF13c6253f1B10d66896Bf399Ef",
    ccipBnMAvalancheFuji: "0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4",
    ccipBnMPolygonMumbai: "0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40",

    ccipLnMEthereumSepolia: "0x466D489b6d36E7E3b824ef491C225F5830E81cC1",
    clCcipLnMOptimismGoerli: "0x835833d556299CdEC623e7980e7369145b037591",
    clCcipLnMArbitrumTestnet: "0x0E14dBe2c8e1121902208be173A3fb91Bb125CDB",
    clCcipLnMAvalancheFuji: "0x70F5c5C40b873EA597776DA2C21929A8282A3b35",
    clCcipLnMPolygonMumbai: "0xc1c76a8c5bFDE1Be034bbcD930c668726E7C1987",

    init: function () {
        this.networks[this.SupportedNetworks.ETHEREUM_SEPOLIA] = "Ethereum Sepolia";
        this.networks[this.SupportedNetworks.OPTIMISM_GOERLI] = "Optimism Goerli";
        this.networks[this.SupportedNetworks.AVALANCHE_FUJI] = "Avalanche Fuji";
        this.networks[this.SupportedNetworks.ARBITRUM_GOERLI] = "Arbitrum Goerli";
        this.networks[this.SupportedNetworks.POLYGON_MUMBAI] = "Polygon Mumbai";
    },

    getDummyTokensFromNetwork: function (network) {
        if (network === this.SupportedNetworks.ETHEREUM_SEPOLIA) {
            return [this.ccipBnMEthereumSepolia, this.ccipLnMEthereumSepolia];
        } else if (network === this.SupportedNetworks.OPTIMISM_GOERLI) {
            return [this.ccipBnMOptimismGoerli, this.clCcipLnMOptimismGoerli];
        } else if (network === this.SupportedNetworks.ARBITRUM_GOERLI) {
            return [this.ccipBnMArbitrumTestnet, this.clCcipLnMArbitrumTestnet];
        } else if (network === this.SupportedNetworks.AVALANCHE_FUJI) {
            return [this.ccipBnMAvalancheFuji, this.clCcipLnMAvalancheFuji];
        } else if (network === this.SupportedNetworks.POLYGON_MUMBAI) {
            return [this.ccipBnMPolygonMumbai, this.clCcipLnMPolygonMumbai];
        }
    },

    getConfigFromNetwork: function (network) {
        if (network === this.SupportedNetworks.ETHEREUM_SEPOLIA) {
            return [
                this.routerEthereumSepolia,
                this.linkEthereumSepolia,
                this.wethEthereumSepolia,
                this.chainIdEthereumSepolia,
            ];
        } else if (network === this.SupportedNetworks.OPTIMISM_GOERLI) {
            return [
                this.routerOptimismGoerli,
                this.linkOptimismGoerli,
                this.wethOptimismGoerli,
                this.chainIdOptimismGoerli,
            ];
        } else if (network === this.SupportedNetworks.ARBITRUM_GOERLI) {
            return [
                this.routerArbitrumTestnet,
                this.linkArbitrumTestnet,
                this.wethArbitrumTestnet,
                this.chainIdArbitrumTestnet,
            ];
        } else if (network === this.SupportedNetworks.AVALANCHE_FUJI) {
            return [
                this.routerAvalancheFuji,
                this.linkAvalancheFuji,
                this.wavaxAvalancheFuji,
                this.chainIdAvalancheFuji,
            ];
        } else if (network === this.SupportedNetworks.POLYGON_MUMBAI) {
            return [
                this.routerPolygonMumbai,
                this.linkPolygonMumbai,
                this.wmaticPolygonMumbai,
                this.chainIdPolygonMumbai,
            ];
        }
    },
};

CCIPNetworks.init();