import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux'
import {logout} from '../../redux/auth-reducer'


import {Avatar, Col,  Image, Menu, Row, Layout, Button} from "antd";

const Header = (props) => {
    const {Header} = Layout;
    const isAuth = useSelector(state=>state.auth.isAuth);
    const login = useSelector (state=> state.auth.login);
    const dispatch = useDispatch()
    const logoutCallback = () => {
        dispatch(logout())
    }
    return (

    <Header className="header">
        <div className="logo" />

        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link exact  to='/users' >Developers</Link></Menu.Item>

                </Menu>
            </Col>

                {isAuth ?
                    <>
                        <Col span={3}>
                        <span style={{color: 'white'}}>{login}</span>
                        </Col>
                        <Col span={1}>
                            <Avatar
                                src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            />
                        </Col>
                        <Col span={2}>
                        <Button onClick={logoutCallback}>Logout</Button>
                        </Col>
                    </>
                    : <Link to={'/login'}>Login</Link>
                }


        </Row>


    </Header>
    )
}

export default Header;