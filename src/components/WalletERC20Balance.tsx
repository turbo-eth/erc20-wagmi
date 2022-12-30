import * as React from 'react';

import classNames from 'classnames';
import useERC20Read from '../hooks/useERC20Read';
import { useAccount } from 'wagmi';
import { formatEther } from 'ethers/lib/utils';

interface WalletERC20BalanceProps {
  className?: string;
  address: string;
  msg?: string;
  msgActive: boolean;
}

export const WalletERC20Balance = ({
  className,
  address,
  msg,
  msgActive,
}: WalletERC20BalanceProps) => {
  const classes = classNames(className, 'WalletERC20Balance');
  const { address: accountAddress } = useAccount();
  const { data, isError, isLoading } = useERC20Read(address, 'balanceOf', [
    accountAddress,
  ]);

  if (isLoading) return null;
  if ((isError || (!isError && !data)) && !msgActive) return null;
  if ((isError || (!isError && !data)) && msgActive)
    return <span className={className}>{msg}</span>;
  return <div className={classes}>{formatEther(data || '0')}</div>;
};

WalletERC20Balance.defaultProps = {
  msg: 'Connect Wallet',
  msgActive: false,
  truncate: false,
};

export default WalletERC20Balance;
