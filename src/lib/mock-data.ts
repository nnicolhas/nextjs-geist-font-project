import { User, Account, Transaction, CreditCard, Beneficiary, Bill } from '@/types';

export const mockUser: User = {
  id: '1',
  name: 'John Smith',
  email: 'john.smith@email.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2bba67ce-d3e8-4abc-b33d-3d9d5ade57e2.png'
};

export const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Primary Checking',
    type: 'checking',
    balance: 3405.52,
    currency: 'USD',
    accountNumber: '****1234',
    routingNumber: '123456789'
  },
  {
    id: '2',
    name: 'Savings Account',
    type: 'savings',
    balance: 15420.00,
    currency: 'USD',
    accountNumber: '****5678',
    routingNumber: '123456789'
  },
  {
    id: '3',
    name: 'Investment Portfolio',
    type: 'investment',
    balance: 28750.25,
    currency: 'USD',
    accountNumber: '****9012',
    routingNumber: '123456789'
  }
];

export const mockCreditCards: CreditCard[] = [
  {
    id: '1',
    name: 'Premium Platinum',
    number: '**** **** **** 1234',
    expiryDate: '12/28',
    balance: 2340.50,
    limit: 15000,
    type: 'visa',
    status: 'active'
  },
  {
    id: '2',
    name: 'Cashback Gold',
    number: '**** **** **** 5678',
    expiryDate: '08/27',
    balance: 890.25,
    limit: 8000,
    type: 'mastercard',
    status: 'active'
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'debit',
    amount: 85.50,
    description: 'Grocery Store Purchase',
    category: 'Food & Dining',
    date: new Date('2024-01-15'),
    merchant: 'Fresh Market',
    status: 'completed',
    accountId: '1'
  },
  {
    id: '2',
    type: 'credit',
    amount: 2500.00,
    description: 'Salary Deposit',
    category: 'Income',
    date: new Date('2024-01-14'),
    merchant: 'Tech Company Inc',
    status: 'completed',
    accountId: '1'
  },
  {
    id: '3',
    type: 'debit',
    amount: 45.20,
    description: 'Gas Station',
    category: 'Transportation',
    date: new Date('2024-01-13'),
    merchant: 'Shell Gas Station',
    status: 'completed',
    accountId: '1'
  },
  {
    id: '4',
    type: 'debit',
    amount: 120.00,
    description: 'Electric Bill',
    category: 'Utilities',
    date: new Date('2024-01-12'),
    merchant: 'City Electric Co',
    status: 'completed',
    accountId: '1'
  },
  {
    id: '5',
    type: 'debit',
    amount: 25.99,
    description: 'Netflix Subscription',
    category: 'Entertainment',
    date: new Date('2024-01-11'),
    merchant: 'Netflix',
    status: 'completed',
    accountId: '1'
  }
];

export const mockBeneficiaries: Beneficiary[] = [
  {
    id: '1',
    name: 'Alexander',
    accountNumber: '****2468',
    bankName: 'Chase Bank',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/013f6439-fa8e-4ccd-bb08-a0ae72323018.png',
    isFavorite: true
  },
  {
    id: '2',
    name: 'Sarah',
    accountNumber: '****1357',
    bankName: 'Bank of America',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b0315388-1cf9-4edd-ae9f-44097d902ccc.png',
    isFavorite: true
  },
  {
    id: '3',
    name: 'Thomas',
    accountNumber: '****9876',
    bankName: 'Wells Fargo',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bf7a2553-f6aa-4e57-9884-596ad3d7ca15.png',
    isFavorite: false
  },
  {
    id: '4',
    name: 'Samantha',
    accountNumber: '****5432',
    bankName: 'Citibank',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a8f72cd9-0a90-4b35-b725-5047e0637e1f.png',
    isFavorite: false
  }
];

export const mockBills: Bill[] = [
  {
    id: '1',
    name: 'Buy Camera',
    category: 'Shopping',
    amount: 3100,
    dueDate: new Date('2024-02-01'),
    status: 'pending',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b34dc4a8-d247-4f18-a819-89a7c1366447.png'
  },
  {
    id: '2',
    name: 'Buy Gamepad',
    category: 'Entertainment',
    amount: 3100,
    dueDate: new Date('2024-02-05'),
    status: 'pending',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17a667c0-a5e0-4a8d-83f8-2f7ebf1acb65.png'
  },
  {
    id: '3',
    name: 'Buy Television',
    category: 'Electronics',
    amount: 3100,
    dueDate: new Date('2024-02-10'),
    status: 'pending',
    logo: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35cf46f6-d36f-4c95-a983-e7ff878c4e53.png'
  }
];
