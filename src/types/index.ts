export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'investment';
  balance: number;
  currency: string;
  accountNumber: string;
  routingNumber: string;
}

export interface Transaction {
  id: string;
  type: 'debit' | 'credit';
  amount: number;
  description: string;
  category: string;
  date: Date;
  merchant: string;
  status: 'completed' | 'pending' | 'failed';
  accountId: string;
}

export interface CreditCard {
  id: string;
  name: string;
  number: string;
  expiryDate: string;
  balance: number;
  limit: number;
  type: 'visa' | 'mastercard' | 'amex';
  status: 'active' | 'blocked' | 'expired';
}

export interface Beneficiary {
  id: string;
  name: string;
  accountNumber: string;
  bankName: string;
  avatar: string;
  isFavorite: boolean;
}

export interface Bill {
  id: string;
  name: string;
  category: string;
  amount: number;
  dueDate: Date;
  status: 'paid' | 'pending' | 'overdue';
  logo: string;
}
