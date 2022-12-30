import * as React from 'react';

import classNames from 'classnames';
import useERC20Read from '../hooks/useERC20Read';

interface ERC20DecimalsProps {
  className?: string;
  contractAddress: string;
}

export const ERC20Decimals = ({
  className,
  contractAddress,
}: ERC20DecimalsProps) => {
  const classes = classNames(className, 'ERC20Decimals');
  const { data, isError, isLoading } = useERC20Read(
    contractAddress,
    'decimals'
  );
  if (isError || isLoading) return null;
  return <span className={classes}>{data}</span>;
};

export default ERC20Decimals;
