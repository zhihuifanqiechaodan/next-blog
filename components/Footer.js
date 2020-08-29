import { SafetyCertificateFilled, EditFilled, BellFilled } from '@ant-design/icons';

import '../public/styles/components/footer.scss'

const Footer = () => {
    // 当前年份
    const nowTime = new Date().getFullYear()

    return (
        <div className="footer-container">
            <div className="footer-comp-item">
                <BellFilled />
                <span>系统由 Next + Egg + Ant Desgin 驱动</span>
            </div>
            <div className="footer-comp-item">
                <SafetyCertificateFilled />
                <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备18034129号</a>
            </div>
            <div className="footer-comp-item">
                <EditFilled />
                <span>Gao Yu 2019 - {nowTime}</span>
            </div>
        </div>
    )
}

export default Footer