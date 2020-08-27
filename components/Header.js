import { Row, Col, Menu, Icon } from 'antd'
import { IdcardOutlined } from '@ant-design/icons';

import '../public/styles/components/header.scss'

const Header = () => (
    <div className="header-wrapper">
        <Row type="flex" justify="center" className="header-container" >
            <Col xs={24} sm={24} md={8}>
                <img className="header-logo" src="http://maijian-prod.oss-cn-beijing.aliyuncs.com/ale-maijian/logo.png"></img>
            </Col>

            <Col xs={0} sm={0} md={16} className="header-comp-menu" >
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <IdcardOutlined style={{ fontSize: '0.9rem' }} />
                        <span>博客首页</span>
                    </Menu.Item>
                    <Menu.Item key="video">
                        <IdcardOutlined style={{ fontSize: '0.9rem' }} />
                        <span>视频教程</span>
                    </Menu.Item>
                    <Menu.Item key="life">
                        <IdcardOutlined style={{ fontSize: '0.9rem' }} />
                        <span>分享视频</span>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header