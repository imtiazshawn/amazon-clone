import React from 'react';
import '../Styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider';
import { getBasketTotal } from '../Reducer/reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const Navigate = useNavigate();

  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={e => Navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;