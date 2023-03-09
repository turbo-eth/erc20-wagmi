import React from 'react';

import classNames from 'classnames';
import { useErc20Symbol } from '../core';

interface ERC20SymbolProps {
  className?: string;
  address: '0x${string}';
  abi?: any;
  chainId?: number;
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
export const ERC20Symbol = ({
  className,
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
}: ERC20SymbolProps): JSX.Element | null => {
  const classes = classNames(className, 'ERC20Symbol');
  const { data, isError, isLoading } = useErc20Symbol({
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

export default ERC20Symbol;
