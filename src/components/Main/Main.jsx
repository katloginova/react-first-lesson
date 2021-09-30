import React from "react";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import './style.css';


class Main extends React.Component{
    render(){
        return(
            <main className='main'>
                <Menu />
                <Content />
            </main>
        )
    }
}

export default Main;