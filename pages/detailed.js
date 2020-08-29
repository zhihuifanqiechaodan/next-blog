import React from 'react'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Row, Col, Affix, Breadcrumb } from 'antd'
import { UserOutlined, FieldTimeOutlined, ShareAltOutlined } from '@ant-design/icons';

import Header from '../components/Header'
import Qrcode from '../components/Qrcode'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import '../public/styles/pages/detailed.scss'

const Detailed = () => {
    const input = '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
     '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'
    return (
        <>
            <Head>
                <title>Detailed</title>
            </Head>
            <Header />
            <div className="app-container">
                {/* 主体内容 */}
                <Row className="detailed-container app-comp-content" type="flex" justify="space-between">
                    <Col xs={24} sm={24} md={17}>
                        <Breadcrumb className="detailed-breadcrumb">
                            <Breadcrumb.Item className="breadcrumb-item">
                                <a href="/">博客首页</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>文章详情</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="detailed">
                            <div className="detailed-header">
                                <h1 className="detailed-title">React实战视频教程-技术胖Blog开发(更新08集)</h1>
                                <hr></hr>
                                <div className="common-flex">
                                    <div className="icon-item">
                                        <UserOutlined style={{ fontSize: '0.9rem' }} /> <span>Gao Yu</span>
                                    </div>
                                    <div className="icon-item">
                                        <FieldTimeOutlined style={{ fontSize: '0.9rem' }} /> <span>2019-06-28</span>
                                    </div>
                                    <div className="icon-item">
                                        <ShareAltOutlined style={{ fontSize: '0.9rem' }} /> <span>JavaScript</span>
                                    </div>
                                </div>
                            </div>
                            <div className="detailed-content">
                                <ReactMarkdown source={input} />
                            </div>
                        </div>
                    </Col>

                    <Col xs={0} sm={0} md={6} offset={1}>
                        <Affix offsetTop={84}>
                            <div className="app-comp-sidebar">
                                <Qrcode />
                                <Author />
                                <Advert />
                            </div>
                        </Affix>
                    </Col>
                </Row>
                {/* 公共底部 */}
            </div>
            <Footer />
        </>
    )
}
export default Detailed