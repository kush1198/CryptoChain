import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptochain-logo.png'
import useWindowSize from '../hooks/useWindowSize'

const {Title} = Typography;
const {Item} = Menu;

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true)
    const {height,width} = useWindowSize();
    
    useEffect( () => ( width>768 ? setActiveMenu(true) : setActiveMenu(false) ),[width] );
    return (
        <div className="nav-container">

            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Title level={2} className="logo">
                    <Link to="/" onClick={() => width<=768?setActiveMenu(false):null} >CryptoChain</Link>
                </Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined/></Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Item icon={<HomeOutlined/>}>
                        <Link to="/" onClick={() => width<=768?setActiveMenu(false):null}>Home</Link>
                    </Item>
                    <Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies" onClick={() => width<=768?setActiveMenu(false):null} >Cryptocurrencies</Link>
                    </Item>
                    <Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges" onClick={() => width<=768?setActiveMenu(false):null} >Exchanges</Link>
                    </Item>
                    <Item icon={<BulbOutlined/>}>
                        <Link to="/news" onClick={() => width<=768?setActiveMenu(false):null} >News</Link>
                    </Item>
                </Menu>
            )}
        
        </div>
    )
}

export default Navbar;