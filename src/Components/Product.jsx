import React from 'react';
import '../Styles/Product.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../Context/StateProvider';

const Product = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(`this is the basket >>`, basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
              {Array(rating).fill().map((_, i) => (
                <p><StarIcon className='starIcon' style={{fontSize: '16px'}} /></p>
              ))}
            </div>
        </div>
        
        <img src={image} style={{marginTop: '15px'}} alt="" />

        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product;