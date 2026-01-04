
export enum ChainType {
  TRC20 = 'TRC20',
  ERC20 = 'ERC20',
  BEP20 = 'BEP20'
}

export interface WalletBalance {
  currency: string;
  chain: ChainType;
  amount: number;
  valueUsd: number;
}

export interface Transaction {
  id: string;
  type: 'Payment' | 'Withdrawal' | 'Exchange';
  status: 'Completed' | 'Pending' | 'Failed';
  amount: number;
  currency: string;
  date: string;
  txHash?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  category?: string;
}
