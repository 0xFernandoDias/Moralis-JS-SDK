import { getNFTOwnersOperation, GetNFTOwnersRequest } from '@moralisweb3/common-evm-utils';
import { SWRConfiguration } from 'swr/dist/types';
import axios from 'axios';
import Moralis from 'moralis';
import useSWR from 'swr';

export const useEvmNFTOwners = (request: GetNFTOwnersRequest, SWRConfig?: SWRConfiguration) => {
  const axiosFetcher = async (endpoint: string, fetcherParams: any) => {
    const jsonResponse = await axios.post(`/api/moralis/${endpoint}`, fetcherParams);
    return getNFTOwnersOperation.deserializeResponse(jsonResponse.data, request, Moralis.Core);
  };

  const { data, error, mutate, isValidating } = useSWR(['evmApi/getNFTOwners', getNFTOwnersOperation.serializeRequest(request, Moralis.Core)], axiosFetcher, SWRConfig);

  return {
    data,
    error,
    refetch: async () => mutate(),
    isValidating,
  };
};