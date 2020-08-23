import { Row, Col, Menu, Icon } from 'antd'
import { IdcardOutlined } from '@ant-design/icons';

import '../public/styles/components/header.scss'

const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">只会番茄炒蛋</span>
                <span className="header-txt">WEB前端开发攻城狮</span>
            </Col>

            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <IdcardOutlined style={{ fontSize: '18px' }} />
                        <span>博客首页</span>
                    </Menu.Item>
                    <Menu.Item key="video">
                        <IdcardOutlined style={{ fontSize: '18px' }} />
                        <span>视频教程</span>
                    </Menu.Item>
                    <Menu.Item key="life">
                        <IdcardOutlined style={{ fontSize: '18px' }} />
                        <span>分享视频</span>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header