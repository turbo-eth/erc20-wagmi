import React from 'react';

import classNames from 'classnames';

import useERC20Read from '../hooks/useERC20Read';

interface ERC20SymbolProps extends ContractReadOptions {
  className?: string;
}
export const ERC20Symbol = ({
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
}: ERC20SymbolProps) => {
  const classes = classNames(className, 'ERC20Symbol');
  const { data, isError, isLoading } = useERC20Read({
    chainId,
    address,
    functionName: 'symbol',
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

export default ERC20Symbol;
