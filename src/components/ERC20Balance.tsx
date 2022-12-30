import * as React from 'react';

import classNames from 'classnames';
import { utils } from 'ethers';
import useERC20Read from '../hooks/useERC20Read';

interface ERC20BalanceProps {
  className?: string;
  account?: string;
  address: string;
  chainId: number;
}

export const ERC20Balance = ({
  className,
  account,
  chainId,
  address,
}: ERC20BalanceProps) => {
  const classes = classNames(className, 'ERC20Balance');
  const { data, isError, isLoading } = useERC20Read(
    chainId,
    address,
    'balanceOf',
    [account]
  );
  if (isError || isLoading) return null;
  return <span className={classes}>{utils.formatEther(data || '0')}</span>;
};

export default ERC20Balance;
