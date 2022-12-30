import { utils } from 'ethers';

export function formatBalance(balance = '0', decimals = 18): string {
  return utils.formatUnits(balance, decimals);
}
