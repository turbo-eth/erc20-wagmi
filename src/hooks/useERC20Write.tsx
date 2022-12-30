import { useContractWrite, erc20ABI, usePrepareContractWrite } from 'wagmi';

export function useERC20Write(
  address: string,
  method: string,
  args: any[],
  overrides?: any,
  configs?: any
): any {
  const { config } = usePrepareContractWrite({
    address: address,
    abi: erc20ABI,
    functionName: method,
    args: args,
    overrides: overrides,
    ...configs,
  });
  // @ts-ignore
  return useContractWrite(config);
}

export default useERC20Write;
