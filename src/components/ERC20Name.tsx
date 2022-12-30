import * as React from 'react';
import classNames from 'classnames';
import useERC20Read from '../hooks/useERC20Read';

interface ERC20NameProps {
  className?: string;
  address: string;
  chainId: number;
}

export const ERC20Name = ({ className, chainId, address }: ERC20NameProps) => {
  const classes = classNames(className, 'ERC20Name');
  const { data, isError, isLoading } = useERC20Read(chainId, address, 'name');
  if (isError || isLoading) return null;
  return <span className={classes}>{data}</span>;
};

export default ERC20Name;
