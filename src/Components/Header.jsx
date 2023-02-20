import React from 'react';
import '../Styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>

      {/* LOGO */}
      <Link to='/'>
        <img 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          className='header__logo' alt="" 
        />
      </Link>

      {/* SEARCH */}
      <div className="header__search">
        <input className='header__searchInput' type="text" />
        <SearchIcon className='header_searchIcon' />
      </div>

      {/* HEADER NAV */}
      <div className="header__nav">

      <Link to={!user && '/login'}>
        <div
          onClick={handleAuthentication}
          className="header__option"
        >
          <span className='header_optionLineOne'>
            Hello, {user ? user.email : 'Guest'}
          </span>
          <span className='header_optionLineTwo'>
            {user ? 'Sign Out' : 'Sign In'}
          </span>
        </div>
      </Link>
        <div className="header__option">
          <span className='header_optionLineOne'>
            Returns
          </span>
          <span className='header_optionLineTwo'>
            & Orders
          </span>
        </div>
        <div className="header__option">
          <span className='header_optionLineOne'>
            Your 
          </span>
          <span className='header_optionLineTwo'>
            Prime
          </span>
        </div>
        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon style={{cursor: 'pointer'}} />
            <span className="header_optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header;