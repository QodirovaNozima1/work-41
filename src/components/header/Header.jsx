import React, { useState } from 'react'
import "./Header.css"
import navlogo from "../../assets/click.png"
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const links = ["Каталог", "Доставка", " Условия", "Контакты"]
  const number = ["+ 375 736 463 64 72  /+ 375 736 463 64 72"]
  return (
    <div className="header mb-32">
      <div className='container w-5/6'>
        <nav className="navbar py-5 flex items-center justify-between">
          <div className="navbar__logo">
            <img src={navlogo} alt="" />
          </div>
          <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar__collection flex gap-7">
              {
                links?.map((el, index) => (<li key={index} className="navbar__item"><a href="#"><span>{el}</span></a></li>))
              }
            </ul>
          </div>
          <div className="navbar__number  flex-col text-base font-medium ">
            {
              number?.map((el, index) => (<li key={index} className="navbar__item list-none"><a href="#"><span>{el}</span></a></li>))
            }
            <p className='text-end font-extralight text-sm'>Заказать звонок</p>
          </div>
          <div onClick={toggleMenu} className="navbar__menu text-2xl">
          <AiOutlineMenuUnfold />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header