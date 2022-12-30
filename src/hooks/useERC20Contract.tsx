import { useContract, erc20ABI } from 'wagmi';

export function useERC20Contract(address: string): any {
  return useContract({
    address: address,
    abi: erc20ABI,
  });
}

export default useERC20Contract;
