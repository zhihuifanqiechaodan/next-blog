import '../public/styles/components/qrcode.scss'

 const Qrcode = ()=>{
    return (
        <div className="qrcode-container">
            <img className="qrcode-comp-img" src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/app-install.6226a3b.png"></img>
            <div className="qrcode-comp-content">
                <div className="headline">关注微信公众号</div>
                <div className="desc">帮助开发者成长的公众号</div>
            </div>
        </div>
    )
 }

 export default Qrcode