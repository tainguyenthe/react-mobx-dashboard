import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router";

const { Sider } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: "inline",
            selectedKey: ""
        };
    }
    componentDidMount() {
        const _path = this.props.path;
        this.setState({
            openKey: _path.substr(0, _path.lastIndexOf("/")),
            selectedKey: _path
        });
    }
    componentWillReceiveProps(nextProps) {
        this.onCollapse(nextProps.collapsed);
    }
    onCollapse = collapsed => {
        this.setState({
            collapsed,
            mode: collapsed ? "vertical" : "inline"
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };
    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsible
                collapsed={this.props.collapsed}
                onCollapse={this.onCollapse}
                style={{ overflowY: "auto" }}
            >
                <div className="logo" />
                <Menu
                    onClick={this.menuClick}
                    theme="dark"
                    mode={this.state.mode}
                    selectedKeys={[this.state.selectedKey]}
                    defaultOpenKeys={["/app/android", "/app/ios"]}
                >
                    <MenuItem key="/app/dashboard/index">
                        <Link to={"/app/dashboard/index"}>
                            <Icon type="mobile" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </MenuItem>
                    <SubMenu
                        key="/app/android"
                        title={
                            <span>
                                <Icon type="android" />
                                <span className="nav-text">Android</span>
                            </span>
                        }
                    >
                        <MenuItem key="/app/android/nougat">
                            <Link to={"/app/android/nougat"}>nougat</Link>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu
                        key="/app/ios"
                        title={
                            <span>
                                <Icon type="apple" />
                                <span className="nav-text">ios</span>
                            </span>
                        }
                    >
                        <MenuItem key="/app/ios/iphone">
                            <Link to={"/app/ios/iphone"}>iPhone</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? "70px" : "206px"};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        );
    }
}

export default SiderCustom;
