import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import logoSvg from "../assets/img/logo1.png";
import cartSvg from "../assets/img/cart.svg";
import userSvg from "../assets/img/user.svg";
import { useSelector } from "react-redux";
import { selectSneakerData } from "../redux/sneaker/selector";

type HeaderProps = {
  setCartOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ setCartOpened }) => {
  const { items } = useSelector(selectSneakerData);
  const totalPrice = items
    .filter((item) => item.isAddToCart === true)
    .reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src={logoSvg} alt="logo" />
          <div>
            <h3 className="text-uppercase">MY SNEAKERS</h3>
            <p className="opacity-5">Магазин кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li
          className="mr-30 cu-p d-flex align-center"
          onClick={() => setCartOpened(true)}
        >
          <img width={18} height={18} src={cartSvg} alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>

        <li>
          <Link to="/orders">
            <img
              className="mt-5"
              width={18}
              height={18}
              src={userSvg}
              alt="Пользователь"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
