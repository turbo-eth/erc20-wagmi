import * as React from 'react';

import classNames from 'classnames';
import { utils } from 'ethers';
import { useAccount } from 'wagmi';

import useERC20Read from '../hooks/useERC20Read';

interface WalletERC20BalanceProps {
  className?: string;
  address: string;
  msg?: string;
  msgActive: boolean;
  chainId: number;
}

export const WalletERC20Balance = ({
  className,
  address,
  msg,
  msgActive,
  chainId,
}: WalletERC20BalanceProps) => {
  const classes = classNames(className, 'WalletERC20Balance');
  const { address: accountAddress } = useAccount();
  const { data: decimals } = useERC20Read({
    chainId,
    address,
    functionName: 'decimals',
  });
  const { data, isError, isLoading } = useERC20Read({
    chainId,
    address,
    functionName: 'balanceOf',
    args: [accountAddress],
  });

  if (isLoading) return null;
  if ((isError || (!isError && !data)) && !msgActive) return null;
  if ((isError || (!isError && !data)) && msgActive)
    return <span className={className}>{msg}</span>;
  return (
    <span className={classes}>
      {utils.formatUnits(String(data), String(decimals))}
    </span>
  );
};

WalletERC20Balance.defaultProps = {
  msg: 'Connect Wallet',
  msgActive: false,
  truncate: false,
};

export default WalletERC20Balance;
