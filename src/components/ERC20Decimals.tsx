import * as React from 'react';

import classNames from 'classnames';
import { useErc20Decimals } from '../core';

interface ERC20DecimalsProps {
  className?: string;
  address: '0x${string}';
  abi?: any;
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

export const ERC20Decimals = ({
  chainId,
  address,
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
}: ERC20DecimalsProps): JSX.Element | null => {
  const classes = classNames('ERC20Decimals');
  const { data, isError, isLoading } = useErc20Decimals({
    chainId,
    address,
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
