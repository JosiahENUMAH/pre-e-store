import React from 'react';
import './Checkout.css'
// import logo from './logo.svg';
import { PaystackButton } from 'react-paystack';
// import './App.css';

const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000*100,
  publicKey: 'pk_test_1bee536b4b52b3dbbdb5c5800d4d7bcc606d1fed',
};

function Checkout() {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Paystack Button Implementation',
      onSuccess: (reference) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

  return (
    <div className="Checkout">
      <header className="Checkout-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Group C <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Checkout-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take me to Cloud 9
        </a>
      </header>
      <PaystackButton {...componentProps} />
    </div>
  );
}

export default Checkout;