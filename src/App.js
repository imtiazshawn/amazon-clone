import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Payment from './Components/Payment';
import Order from './Components/Order';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './Context/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51MdT03FPJzYXn33MzZ62tBSBhDR4BR2FHhOH0PD4aKFXRFXqKfqGlYd8MiUaUmuNGCBx8zSpVCmP2a0UGenvISrz001754fqsS');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    });
  }, [])
  

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/payment' element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }/>
          <Route path='/orders' element={<Order/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;