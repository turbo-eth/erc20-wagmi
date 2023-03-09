import * as React from 'react';

import classNames from 'clsx';
import { useAccount } from 'wagmi';

import { useErc20BalanceOf, useErc20Decimals } from '../core';
import { formatUnits } from 'viem';

interface WalletERC20BalanceProps {
  className?: string;
  address: '0x${string}';
  chainId?: number;
}

export const WalletERC20Balance = ({
  className,
  address,
  chainId,
}: WalletERC20BalanceProps) => {
  const classes = classNames(className, 'WalletERC20Balance');
  const { address: accountAddress } = useAccount();
  const { data: decimals } = useErc20Decimals({
    chainId,
    address,
  });
  const { data, isError, isLoading } = useErc20BalanceOf({
    chainId,
    address,
    args: [accountAddress as `0x${string}`],
  });

  if (isLoading) return null;
  if (isError || (!isError && !data)) return null;
  return (
    <span className={classes}>
      {formatUnits(data?.toString() as unknown as bigint, decimals as number)}
    </span>
  );
};
