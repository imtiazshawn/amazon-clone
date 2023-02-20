import React from 'react';
import '../Styles/Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from '../Context/StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>


      {/* LEFT */}
      <div className="checkout__left">
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div className="checkout__title">
          <h3>hello, {user?.email}</h3>
          <h2>Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="checkout__right">
        <Subtotal />
      </div>


    </div>
  )
}

export default Checkout;