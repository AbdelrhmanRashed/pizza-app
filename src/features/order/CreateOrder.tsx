import { Form, useActionData, useNavigation } from 'react-router-dom';
import type { FormErrors } from '../../types';
import Button from '../../ui/Button';
import { useAppSelector } from '../../hooks';
import { getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';

const CreateOrder = () => {
  const formErrors = useActionData() as FormErrors;
  const navigation = useNavigation();
  const username = useAppSelector((state) => state.user.username);
  const isSubmitting = navigation.state === 'submitting';

  const [withPriority, setWithPriority] = useState<boolean>(false);
  const cart = useAppSelector(getCart);
  const totalCartPrice: number = useAppSelector(getTotalCartPrice);
  const priorityPrice: number = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice: number = totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="my-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" className="space-y-3">
        {/* Full Name Input */}
        <div className="mb-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Full Name</label>
            <div className="grow">
              <input
                type="text"
                className="form-input w-full"
                name="customer"
                required
                defaultValue={username}
              />
            </div>
          </div>
          {formErrors?.customerName && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {formErrors.customerName}
            </p>
          )}
        </div>
        {/* Phone number Input  */}
        <div className="mb-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Phone number</label>
            <div className="grow">
              <input
                type="tel"
                className="form-input w-full"
                name="phone"
                required
              />
            </div>
          </div>
          {formErrors?.phone && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {formErrors.phone}
            </p>
          )}
        </div>
        {/* Address Input  */}
        <div className="mb-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Address</label>
            <div className="grow">
              <input
                type="text"
                className="form-input w-full"
                name="address"
                required
              />
            </div>
          </div>
          {formErrors?.address && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
              {formErrors.address}
            </p>
          )}
        </div>
        {/* Priority Input  */}
        <div className="mb-12 flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="size-4 accent-amber-400 focus:ring focus:ring-amber-400 focus:ring-offset-1 focus:outline-none"
            value={String(withPriority)}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        {/* Hidden Input for Cart data  */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        {/* Submit Btn */}
        <div>
          <Button variant="primary" disabled={isSubmitting}>
            {isSubmitting
              ? 'Placing order...'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrder;
