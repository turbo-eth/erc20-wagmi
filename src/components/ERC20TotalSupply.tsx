import * as React from 'react';

import classNames from 'classnames';

import useERC20Read from '../hooks/useERC20Read';
import { ContractReadOptions } from '../types/module';
import { formatBalance } from '../utilities';

interface ERC20TotalSupplyProps extends ContractReadOptions {
  className?: string;
}

export const ERC20TotalSupply = ({
  className,
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
}: ERC20TotalSupplyProps) => {
  const classes = classNames(className, 'ERC20TotalSupply');
  const { data, isError, isLoading } = useERC20Read({
    chainId,
    address,
    functionName: 'totalSupply',
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
  });
  if (isError || isLoading) return null;
  return <span className={classes}>{formatBalance(String(data))}</span>;
};

export default ERC20TotalSupply;
