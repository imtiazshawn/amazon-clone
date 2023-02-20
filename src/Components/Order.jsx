import React, {useState, useEffect} from 'react';
import '../Styles/Order.css';
import { useStateValue } from "../Context/StateProvider";
import { db } from '../firebase';

const Order = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
        db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('created', 'desc')
          .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
          ));

    } else {
        setOrders([]);
    }
  }, [])
  

  return (
    <div className='order'>
        <h1>Your Orders</h1>

    </div>
  )
}

export default Order;