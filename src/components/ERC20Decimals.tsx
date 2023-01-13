import * as React from 'react';

import classNames from 'classnames';

import useERC20Read from '../hooks/useERC20Read';

interface ERC20DecimalsProps extends ContractReadOptions {
  className?: string;
}

export const ERC20Decimals = ({
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
}: ERC20DecimalsProps) => {
  const classes = classNames(className, 'ERC20Decimals');
  const { data, isError, isLoading } = useERC20Read({
    chainId,
    address,
    functionName: 'decimals',
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

export default ERC20Decimals;
