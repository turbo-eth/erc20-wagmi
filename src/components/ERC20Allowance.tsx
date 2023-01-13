import * as React from 'react';

import classNames from 'classnames';

import useERC20Read from '../hooks/useERC20Read';
import { ContractReadOptions } from '../types/module';
import { formatBalance } from '../utilities';

interface ERC20AllowanceProps extends ContractReadOptions {
  className?: string;
  account?: string;
  spender?: string;
}

export const ERC20Allowance = ({
  className,
  account,
  spender,
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
}: ERC20AllowanceProps) => {
  const classes = classNames(className, 'ERC20Allowance');
  const { data, isError, isLoading } = useERC20Read({
    chainId,
    address,
    functionName: 'allowance',
    args: args || [account, spender],
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

export default ERC20Allowance;
