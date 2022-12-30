import * as React from 'react';

import classNames from 'classnames';
import useERC20Read from '../hooks/useERC20Read';
import { useAccount } from 'wagmi';
import { utils } from 'ethers';

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
  const { data: decimals } = useERC20Read(chainId, address, 'decimals', []);
  const { data, isError, isLoading } = useERC20Read(
    chainId,
    address,
    'balanceOf',
    [accountAddress]
  );

  if (isLoading) return null;
  if ((isError || (!isError && !data)) && !msgActive) return null;
  if ((isError || (!isError && !data)) && msgActive)
    return <span className={className}>{msg}</span>;
  return (
    <span className={classes}>{utils.formatUnits(data || '0', decimals)}</span>
  );
};

WalletERC20Balance.defaultProps = {
  msg: 'Connect Wallet',
  msgActive: false,
  truncate: false,
};

export default WalletERC20Balance;
