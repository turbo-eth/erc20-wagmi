import { useContractRead, erc20ABI } from 'wagmi';

export function useERC20Read(
  chainId: number,
  address: string,
  method?:
    | string
    | 'transfer'
    | 'transferFrom'
    | 'approve'
    | 'allowance'
    | 'balanceOf'
    | 'decimals'
    | 'name'
    | 'symbol'
    | 'totalSupply',
  args?: any[]
): any {
  return useContractRead({
    chainId: 1,
    address: address,
    abi: erc20ABI,
    // @ts-ignore
    functionName: method,
    // @ts-ignore
    args: args,
  });
}

export default useERC20Read;
