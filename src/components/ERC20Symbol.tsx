import * as React from 'react';
import classNames from 'classnames';
import useERC20Read from '../hooks/useERC20Read';

interface ERC20SymbolProps {
  className?: string;
  address: string;
  chainId: number;
}

export const ERC20Symbol = ({
  className,
  chainId,
  address,
}: ERC20SymbolProps) => {
  const classes = classNames(className, 'ERC20Symbol');
  const { data, isError, isLoading } = useERC20Read(chainId, address, 'symbol');
  if (isError || isLoading) return null;
  return <span className={classes}>{data}</span>;
};

export default ERC20Symbol;
