'use strict';
import React, {Component} from 'react';
import '../../../css/Home.css';
// import reqwest from 'reqwest';
import moment from 'moment';
// devices
import Devlist from '../devices/Devlist';
import Devadd from '../devices/Devadd';
import Devlog from '../devices/Devlog';
// production
import Cateadd from '../production/Cateadd';
import Catelist from '../production/Catelist';
import Prolist from '../production/Prolist';
import Proadd from '../production/Proadd';
// data
import Devices from '../data/Devices';
import Sale from '../data/Sale';
import Userlog from '../data/Userlog';
// management
import Carte from '../management/Carte';
import Metchant from '../management/Merchant';
import Role from '../management/Role';
import User from '../management/User';
// order
import Orderlist from '../order/Orderlist';
import Orderadd from '../order/Orderadd';

import 'moment/locale/zh-cn';

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Tabs,
  Button,
  Collapse,
  Input,
  Form,
} from 'antd';
const Panel = Collapse.Panel;
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const TabPane = Tabs.TabPane;
moment.locale('zh-cn');

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const titleStrs = [
  {title: '设备列表', value: Devlist},
  {title: '设备添加', value: Devadd},
  {title: '设备日志', value: Devlog},
  {title: '商品列表', value: Prolist},
  {title: '商品添加', value: Proadd},
  {title: '种类列表', value: Catelist},
  {title: '种类添加', value: Cateadd},
  {title: '订单列表', value: Orderlist},
  {title: '订单添加', value: Orderadd},
  {title: '销售统计', value: Sale},
  {title: '设备统计', value: Devices},
  {title: '用户数据', value: Userlog},
  {title: '角色管理', value: Role},
  {title: '用户管理', value: User},
  {title: '菜单管理', value: Carte},
  {title: '商户管理', value: Metchant},
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [{title: '欢迎页', content: '欢迎页', key: '0'}];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }
  Welcome = (title, key) => {
    if (key != 0) { 
      for (var i = 0; i < titleStrs.length; i++) {
        if (i == key - 1) {
            const strs = titleStrs[i];
            return <strs.value />;
        }
      }
    } else {
      return 'Hello React';
    }
    // switch (title) {
    //   case '设备列表':i
    //     return <Devlist />;
    //   case '商品列表':
    //     return <Prolist />;
    //   case '设备添加':
    //     const WrappedRegistrationForm1 = Form.create()(Devadd);
    //     return <WrappedRegistrationForm1 />;
    //   <!--  -->ase '商品添加':
    //     const WrappedRegistrationForm2 = Form.create()(Proadd);
    //     return <WrappedRegistrationForm2 />;
    //   default:
    //     return 'Hello React';
    // }
  };

  onChange = activeKey => {
    this.setState({activeKey});
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = ({item, key, keyPath}) => {
    const panes = this.state.panes;
    let flag = false;
    for (let ops of panes) {
      if (ops.key == key) {
        flag = true;
        break;
      }
      continue;
    }
    if (flag == true) {
      // console.log('打开原来的');
      this.setState({panes, activeKey: key});
    } else {
      // console.log('新增加一个');
      console.log(item.props.children);
      panes.push({title: item.props.children, content: 'sadasd', key});
      this.setState({panes, activeKey: key});
    }
    // const activeKey = `newTab${this.newTabIndex++}`;

    console.log(item);
  };

  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({panes, activeKey});
  };

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <Layout style={{padding: '24px 0', background: '#fff'}}>
            <Sider width={200} style={{background: '#fff'}}>
              <Menu
                onClick={this.add}
                mode="inline"
                // defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5']}
                style={{height: '100%'}}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      设备管理
                    </span>
                  }
                >
                  <Menu.Item key="1">设备列表</Menu.Item>
                  <Menu.Item key="2">设备添加</Menu.Item>
                  <Menu.Item key="3">设备日志</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      商品管理
                    </span>
                  }
                >
                  <Menu.Item key="4">商品列表</Menu.Item>
                  <Menu.Item key="5">商品添加</Menu.Item>
                  <Menu.Item key="6">种类列表</Menu.Item>
                  <Menu.Item key="7">种类添加</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="laptop" />
                      订单管理
                    </span>
                  }
                >
                  <Menu.Item key="8">订单列表</Menu.Item>
                  <Menu.Item key="9">订单添加</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <Icon type="notification" />
                      数据统计
                    </span>
                  }
                >
                  <Menu.Item key="10">销售统计</Menu.Item>
                  <Menu.Item key="11">设备统计</Menu.Item>
                  <Menu.Item key="12">用户日志</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <Icon type="notification" />
                      系统管理
                    </span>
                  }
                >
                  <Menu.Item key="13">角色管理</Menu.Item>
                  <Menu.Item key="14">用户管理</Menu.Item>
                  <Menu.Item key="15">菜单管理</Menu.Item>
                  <Menu.Item key="16">商户管理</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{padding: '0 24px', minHeight: 280}}>
              <Tabs
                hideAdd
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
              >
                {this.state.panes.map(pane => (
                  <TabPane tab={pane.title} key={pane.key}>
                    {this.Welcome(pane.title, pane.key)}
                  </TabPane>
                ))}
              </Tabs>
            </Content>
          </Layout>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          xxx ©2019 Created by xxx 请勿商用 后果概不负责
        </Footer>
      </Layout>
    );
  }
}

export default Home;
