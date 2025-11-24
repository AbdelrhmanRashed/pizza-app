import type { ICartItem } from "./cart";

export interface IOrder {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: ICartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status?: string;
}

export interface IFinalOrderData {
  customer: string;
  phone: string;
  address: string;
  cart: ICartItem[];
  priority: boolean;
  position?: string;
}

export type FormErrors = {
  phone?: string;
  customerName?: string;
  address?: string;
};
