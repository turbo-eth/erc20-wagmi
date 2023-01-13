import { Signer, providers } from 'ethers';
import { erc20ABI, useContract } from 'wagmi';

export function useERC20Contract(
  address: string,
  signerOrProvider?: Signer | providers.Provider
): ReturnType<typeof useContract> {
  return useContract({
    address: address,
    abi: erc20ABI,
    signerOrProvider: signerOrProvider,
  });
}

export default useERC20Contract;
