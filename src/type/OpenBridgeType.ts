import { AddressLike } from "ethers";

export type chainAddressConfigType = {
	Bridge: string | AddressLike;
	Token1Address: string | AddressLike;
    Token2Address: string | AddressLike;
    LinkTokenAddress: string | AddressLike;
	weth: string | AddressLike;
};
