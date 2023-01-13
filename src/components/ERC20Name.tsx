import * as React from 'react';

import classNames from 'classnames';

import useERC20Read from '../hooks/useERC20Read';
import { ContractReadOptions } from '../types/module';

interface ERC20NameProps extends ContractReadOptions {
  className?: string;
}

export const ERC20Name = ({
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
}: ERC20NameProps) => {
  const classes = classNames(className, 'ERC20Name');
  const { data, isError, isLoading } = useERC20Read({
    chainId,
    address,
    functionName: 'name',
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
  return <span className={classes}>{String(data)}</span>;
};

export default ERC20Name;
