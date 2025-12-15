import type { FormErrors, IFinalOrderData, IMenuItem, IOrder } from '../types';
import { redirect, type ActionFunctionArgs } from 'react-router-dom';
import { createOrder, getMenu, getOrder } from './apiRestaurant';
import store from '../store';
import { clearCart } from '../features/cart/cartSlice';

type TOrderForm = {
  customer: string;
  phone: string;
  address: string;
  cart: string;
  priority?: string;
  position?: string;
};

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string): boolean =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// Loaders
export async function menuLoader(): Promise<IMenuItem[]> {
  const menu = await getMenu();
  return menu;
}

export async function orderLoader({
  params,
}: ActionFunctionArgs): Promise<IOrder> {
  const order = await getOrder(params.orderId!);
  return order;
}

// Actions
export async function createOrderAction({
  request,
}: ActionFunctionArgs): Promise<Response | FormErrors> {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as TOrderForm;

  const order: IFinalOrderData = {
    ...data,
    priority: data.priority === 'true',
    cart: JSON.parse(data.cart),
  };

  const errors: FormErrors = {};

  if (!order.phone.trim()) errors.phone = 'Phone number is required!';
  else if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (!order.address.trim()) errors.address = 'Your address is required!';
  if (!order.customer.trim()) errors.customerName = 'Your name is required!';

  if (Object.keys(errors).length > 0) return errors;

  //If every thing is okay! create new order and redirect.
  const createdOrder = await createOrder(order);

  //We shouldn't overuse this technique because optimization issue
  store.dispatch(clearCart());

  return redirect(`/order/${createdOrder.id}`);
}
