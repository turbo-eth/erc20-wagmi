import { utils } from 'ethers';

export function formatBalance(balance: string, decimals = 18): string {
  return utils.formatUnits(balance, decimals);
}
