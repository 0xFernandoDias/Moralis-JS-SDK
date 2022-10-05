import { BigNumberish } from '@moralisweb3/core';
import { EvmAddress, EvmAddressish, EvmChainish, EvmChain, Erc20Value, Erc20Token } from '@moralisweb3/evm-utils';

export interface StreamErc20ApprovalData {
  chain: EvmChain;
  transactionHash: string;
  logIndex: number;
  tag: string;
  owner: EvmAddress;
  spender: EvmAddress;
  tokenValue: Erc20Value;
  token: Erc20Token;
}

export interface StreamErc20ApprovalInput {
  chain: EvmChainish;
  transactionHash: string;
  logIndex: string | number;
  tag: string;
  owner: EvmAddressish;
  spender: EvmAddressish;
  value: BigNumberish;
  token: {
    contractAddress: string;
    name: string;
    symbol: string;
    decimals: number;
  };
}
