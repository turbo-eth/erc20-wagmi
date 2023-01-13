import * as React from 'react';

import classNames from 'classnames';

import useERC20Read from '../hooks/useERC20Read';
import { ContractReadOptions } from '../types/module';
import { formatBalance } from '../utilities';

interface ERC20BalanceProps extends ContractReadOptions {
  className?: string;
  account?: string;
}

export const ERC20Balance = ({
  className,
  account,
  chainId,
  address,
  args,
  cacheOnBlock,
  cacheTime,
  enabled,
  scopeKey,
  staleTime,
  suspense,
  overrides,
  onSuccess,
  onError,
  onSettled,
}: ERC20BalanceProps) => {
  const classes = classNames(className, 'ERC20Balance');
  const { data, isError, isLoading } = useERC20Read({
    chainId,
    address,
    functionName: 'balanceOf',
    args: args || [account],
    cacheOnBlock,
    cacheTime,
    enabled,
    scopeKey,
    staleTime,
    suspense,
    overrides,
    onSuccess,
    onError,
    onSettled,
  });
  if (isError || isLoading) return null;
  return <span className={classes}>{formatBalance(String(data))}</span>;
};

export default ERC20Balance;
