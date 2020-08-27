import '../public/styles/components/qrcode.scss'

 const Qrcode = ()=>{
    return (
        <div className="qrcode-container">
            <img className="qrcode-comp-img" src="http://maijian-prod.oss-cn-beijing.aliyuncs.com/ale-maijian/qrcode.png"></img>
            <div className="qrcode-comp-content">
                <div className="headline">关注微信公众号</div>
                <div className="desc">帮助前端成长的公众号</div>
            </div>
        </div>
    )
 }

 export default Qrcode