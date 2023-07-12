import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import Stripe from './Test';
import MentorCalendar from './MentorCalendar';

// Publishable stripe key
const stripePromise = loadStripe(
  'pk_test_51NOUO7Epl77pCN0JAejf7gteaEWYGnz5uprP3UnniFAFzqq8TXRDaZbDaW3uBq4InqWwsYDAKa0CcgOTycPSgE8000LEohatan'
);

const PaymentForm = () => {
  const navigate = useNavigate();
  const [stripe, setStripe] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [paymentError, setPaymentError] = useState(null);

  useEffect(() => {
    stripePromise.then((stripe) => {
      setStripe(stripe);
    });
  }, []);

  const handlePayment = async () => {
    try {
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000, currency: 'USD' }),
      });

      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: stripe.elements.getElement('card'),
        },
      });

      if (error) {
        setPaymentError(error.message);
      } else {
        // Payment success!
        navigate('/mentor-calendar'); // Navigate to the MentorCalendar page
      }
    } catch (error) {
      console.error('Error:', error);
      setPaymentError('An error occurred during payment processing.');
    }
  };

  const routeCalendar = () => {
    navigate('/mentor-calendar'); // Navigate to the MentorCalendar page
  };

  return (
    <div>
      <Stripe />
      <div id="card-element" />
      <button onClick={handlePayment}>Make Payment</button>
      <br></br>
      <button onClick={routeCalendar}>Schedule Session</button>
      {paymentError && <div>{paymentError}</div>}
    </div>
  );
};

export default PaymentForm;