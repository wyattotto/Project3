import React, { useState } from 'react';

const PaymentForm = () => {
  const [clientSecret, setClientSecret] = useState('');

  const handlePayment = async (event) => {
    event.preventDefault();

    const amount = 1000; // Example amount in cents
    const currency = 'USD';

    try {
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      });

      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <button type="submit">Make Payment</button>
    </form>
  );
};

export default PaymentForm;