import React from 'react';
import Logo from '../Logo/Logo';
import './style.css'

class Header extends React.Component{
    render(){
        const menuItems = ['Услуги', 'Магазины', 'Заказы'];
        
        return (
            <header>
                <Logo />
                <ul className='header-menu'>
                    {menuItems?.map((item) => 
                        <li className='header-menu__item'><a href="#">{item}</a></li>
                    )}
                </ul>
            </header>
        )
    }
}

export default Header;