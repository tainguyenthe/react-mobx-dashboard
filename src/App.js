import React, { Component } from "react";
import { Layout, Icon } from "antd";

import SiderCustom from "./components/SiderCustom";
import HeaderCustom from "./components/HeaderCustom";

const { Content, Footer } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Layout className="ant-layout-has-sider">
                <SiderCustom
                    path={this.props.location.pathname}
                    collapsed={this.state.collapsed}
                />
                <Layout>
                    <HeaderCustom toggle={this.toggle} />
                    <Content style={{ margin: "0 16px", overflow: "initial" }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Smart Health ©2018{" "}
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
