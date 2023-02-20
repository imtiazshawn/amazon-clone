import React from 'react';
import '../Styles/CheckoutProduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../Context/StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
}

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => (
            <p><StarIcon className='starIcon' style={{fontSize: '16px'}} /></p>
          ))}
        </div>
        <button onClick={removeFromBasket} style={{cursor: 'pointer'}}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;