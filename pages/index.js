import React, { useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Qrcode from '../components/Qrcode'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import { Row, Col, List, Pagination, Affix, Spin } from 'antd'
import { IdcardOutlined } from '@ant-design/icons';

import axios from 'axios'

import '../public/styles/pages/index.scss'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

const Home = (list) => {
  console.log(list)
  const { articles } = list
  const [mylist, setMylist] = useState(articles)
  const [loading, setLoading] = useState(false)

  // 分页
  const onPaginationChange = (current, size) => {
    console.log(current, size)
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* 公共头部 */}
      <Header />
      <div className="app-container">
        {/* 背景 */}
        <Hero />
        {/* 主体内容 */}
        <Row className="timeline-container app-comp-content" type="flex" justify="space-between">
          <Col className="timeline-entry-list" xs={24} sm={24} md={17}>
            <List
              header={<div>最新日志</div>}
              footer={<Pagination onChange={onPaginationChange} defaultCurrent={1} total={500} />}
              bordered
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <Spin spinning={loading} tip="Loading...">
                  <List.Item>
                    <div className="entry-list-icon">
                      <div className="list-icon-item">
                        <IdcardOutlined style={{ fontSize: '0.9rem' }} /> <span>视频教程</span>
                      </div>
                      <div className="list-icon-item">
                        <IdcardOutlined style={{ fontSize: '0.9rem' }} /> <span>2019-06-28</span>
                      </div>
                      <div className="list-icon-item">
                        <IdcardOutlined style={{ fontSize: '0.9rem' }} /> <span>5498人</span>
                      </div>
                    </div>
                    <div className="entry-list-title" onClick={() => setLoading(true)}>
                      <Link href={{ pathname: '/detailed', query: { id: 1111 } }} >
                        <span>{item.title}</span>
                      </Link>
                    </div>
                    <div className="entry-list-context">{item.context}</div>
                  </List.Item>
                </Spin>
              )}
            />
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
      </div>
      {/* 公共底部 */}
      <Footer />
    </>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('http://www.zhihuifanqiechaodan.com:10000/mock/42/getArticleList').then(
      (res) => {
        const respones = res.data
        console.log(respones)
        if (respones.success) {
          resolve(respones.result)
        } else { }
      }
    )
  })

  return await promise
}

export default Home
