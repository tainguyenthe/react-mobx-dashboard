import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';
import screenfull from 'screenfull';
import avater from '../style/imgs/paratrooper.jpg';

const { Header } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Tai',
            current: 'full'
        }
    }
    
    screenFull = () => {
        if (screenfull.enabled) {
            screenfull.request();
        }
    };

    handleClickOnMenu = (e) => {
        this.setState({
            current: e.key
        })
        if(e.key === 'logout'){
            localStorage.clear();
            window.location.href = '/';
        }
    }

    render() {
        return (
            <Header style={{ background: '#fff', padding: 0, height: 65 }} className="custom-theme" >
                <Icon
                    className="trigger custom-trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    onClick={this.handleClickOnMenu}
                >
                    <MenuItem key="full" onClick={this.screenFull} >
                        <Icon type="arrows-alt" onClick={this.screenFull} />
                    </MenuItem>
                    <MenuItem key="notification">
                        <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                            <Icon type="mail" />
                        </Badge>
                    </MenuItem>

                    <SubMenu title={<span className="avatar"><img src={avater} alt="avater" /><i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="UserCenter">
                            <MenuItem key="username">Hi - {this.state.user}</MenuItem>
                            <MenuItem key="profile">Profile</MenuItem>
                        </MenuItemGroup>
                        <MenuItemGroup title="Settings">
                            <MenuItem key="setting">Setting</MenuItem>
                            <MenuItem key="logout">Logout</MenuItem>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
            </Header>
        )
    }
}

export default HeaderCustom;
