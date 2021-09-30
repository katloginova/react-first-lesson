import React from "react";
import './style.css';

class Menu extends React.Component{
    render(){
        const menuItems = [
            'Телефоны',
            'Компьютеры',
            'Бытовая техника',
            'Смарт-часы',
            'Телевизоры',
            'Посуда',
            'Инструменты',
            'Уцененные товары'
        ]
        return(
            <div className='sidebar'>
                <ul className='sidebar-menu'>
                    {menuItems?.map((item) => 
                        <li className='sidebar-menu__item'>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Menu;