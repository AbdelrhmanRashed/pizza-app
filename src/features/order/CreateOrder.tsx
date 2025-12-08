import { Form, useActionData, useNavigation } from 'react-router-dom';
import type { FormErrors } from '../../types';
import Button from '../../ui/Button';

interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

const fakeCart: CartItem[] = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const formErrors = useActionData() as FormErrors;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

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
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        {/* Hidden Input for Cart data  */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        {/* Submit Btn */}
        <div>
          <Button variant="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Placing order...' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
