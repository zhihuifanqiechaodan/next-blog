import { Avatar, Divider } from 'antd'
import { UserOutlined ,RightOutlined } from '@ant-design/icons';

import '../public/styles/components/author.scss'

const Author = () => {

    return (
        <div className="author-container">
            <div className="author-comp-header">🎖️作者介绍</div>
            <div className="author-comp-describe">
                <Avatar className="author-img" size={100} src="http://maijian-prod.oss-cn-beijing.aliyuncs.com/ale-maijian/author.png" />
                <div className="author-introduction">Enjoy when you can, and endure when you must。</div>
            </div>
            <Divider>社交账号</Divider>
            <div className="social-item">
                <Avatar size={28} icon={<UserOutlined />} className="account" />
                <Avatar size={28} icon={<UserOutlined />} className="account" />
                <Avatar size={28} icon={<UserOutlined />} className="account" />
            </div>
            <div className="more">
                <span>更多介绍</span>
                <RightOutlined style={{ fontSize: '16px', color: '#007fff' }} />
            </div>
        </div>
    )

}

export default Author