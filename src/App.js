import React from 'react';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/NavBar'
import {Link, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Header from './components/Header/Header';
import LoginPage from './components/Login/Login'
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import withLazyLoad from './hoc/LoadLazy';
import { Layout, Menu, Breadcrumb} from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;


// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
class App extends React.Component {
      componentDidMount(){
        this.props.initializeApp()
    }
  render(){

    if(!this.props.initialized) {
      return <Loader/>
    }else
    return (
        <Layout>
            <Header/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                                <Menu.Item key="1"><Link to='/profile' >Profile</Link></Menu.Item>
                                <Menu.Item key="2"><Link exact  to='/dialogs' >Messages</Link></Menu.Item>

                            </SubMenu>
                            <Menu.Item key="4" icon={<LaptopOutlined />} title="Users">
                                <Link exact  to='/users' >users</Link>
                            </Menu.Item>


                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route path='/dialogs' render={()=><DialogsContainer/>}/>
                         <Route path='/profile/:userId?' render={ ()=> <ProfileContainer /> }/>
                        <Route path='/users' render={ ()=> <UsersContainer /> }/>
                         <Route path='/login' render={ ()=> <LoginPage /> }/>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Sentance</Footer>
        </Layout>


    )
  }

}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
  
  
}

export default compose(withRouter,connect(mapStateToProps, {initializeApp}))(App)
