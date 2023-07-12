import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './TestForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NOUO7Epl77pCN0JAejf7gteaEWYGnz5uprP3UnniFAFzqq8TXRDaZbDaW3uBq4InqWwsYDAKa0CcgOTycPSgE8000LEohatan');

export default function Stripe() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_3NRx4QEpl77pCN0J0yHhwCtZ_secret_AiHePql2m1UKu0gX5cK05mLts',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};