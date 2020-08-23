import { Avatar, Divider } from 'antd'
import { UserOutlined } from '@ant-design/icons';

import '../public/styles/components/author.scss'

const Author = () => {

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
            <div className="author-introduction">
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<UserOutlined />} className="account" />
                <Avatar size={28} icon={<UserOutlined />} className="account" />
                <Avatar size={28} icon={<UserOutlined />} className="account" />

            </div>
        </div>
    )

}

export default Author