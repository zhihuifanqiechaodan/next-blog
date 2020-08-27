import { Avatar, Divider } from 'antd'
import { UserOutlined, RightOutlined } from '@ant-design/icons';

import '../public/styles/components/author.scss'

const Author = () => {

    return (
        <div className="author-container">
            <div className="author-comp-title">🎖️作者介绍</div>
            <div className="author-comp-describe">
                <Avatar className="author-img" size={100} src="http://maijian-prod.oss-cn-beijing.aliyuncs.com/ale-maijian/author.png" />
                <div className="author-introduction">Enjoy when you can, and endure when you must。</div>
                <div className="author-more">
                    <span>更多介绍</span>
                    <RightOutlined style={{ fontSize: '16px', color: '#3eaf7c' }} />
                </div>
            </div>
            <Divider>社交账号</Divider>
            <div className="author-comp-social">
                <div className="social-item">
                    <Avatar size={28} icon={<UserOutlined />} className="account" />
                </div>
                <div className="social-item">
                    <Avatar size={28} icon={<UserOutlined />} className="account" />
                </div>
                <div className="social-item">
                    <Avatar size={28} icon={<UserOutlined />} className="account" />
                </div>
            </div>
        </div>
    )

}

export default Author