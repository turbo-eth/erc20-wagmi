import * as React from 'react';

import classNames from 'classnames';

import useERC20Read from '../hooks/useERC20Read';
import { formatBalance } from '../utilities';

interface ERC20BalanceProps {
  className?: string;
  account?: string;
  address: string;
  abi?: any;
  functionName?: string;
  chainId?: number;
  args?: any[];
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
}: ERC20BalanceProps): JSX.Element | null => {
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
