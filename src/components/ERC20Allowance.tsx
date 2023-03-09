import * as React from 'react';

import classNames from 'classnames';

import { formatBalance } from '../utilities';
import { useErc20Allowance } from '../core';

interface ERC20AllowanceProps {
  className?: string;
  address: '0x${string}';
  abi?: any;
  functionName?: string;
  chainId?: number;
  args?: readonly [`0x${string}`, `0x${string}`];
  cacheOnBlock?: boolean;
  watch?: boolean;
  cacheTime?: number;
  enabled?: boolean;
  isDataEqual?: (a: any, b: any) => boolean;
  structuralSharing?: (a: any, b: any) => boolean;
  scopeKey?: string;
  staleTime?: number;
  suspense?: boolean;
  select?: () => void;
  overrides?: {
    [key: string]: any;
  };
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}

export const ERC20Allowance = ({
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
}: ERC20AllowanceProps): JSX.Element | null => {
  const classes = classNames(className, 'ERC20Allowance');
  const { data, isError, isLoading } = useErc20Allowance({
    chainId,
    address,
    args: args,
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
