import { Image } from 'antd'
import '../public/styles/components/hero.scss'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-comp-mask"></div>
      <Image
        className="hero-comp-img"
        src="http://maijian-prod.oss-cn-beijing.aliyuncs.com/ale-maijian/logo.png"
        width={365} />
      <p className="hero-comp-desc">Enjoy when you can, and endure when you must。</p>
    </div>
  )
}

export default Hero