import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICartItem } from '../../types';
import type { RootState } from '../../store';

interface ICart {
  cart: ICartItem[];
}

const initialState: ICart = {
  cart: [
    {
      name: 'pizza',
      pizzaId: 3,
      quantity: 3,
      totalPrice: 30,
      unitPrice: 10,
    },
  ],
};

const cartSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItem>) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (!item) return;

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item?.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cart;
export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: number) => (state: RootState) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
