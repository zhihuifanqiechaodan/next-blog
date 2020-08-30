import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'

const List = () => (
  <>
    <Head>
      <title>List</title>
    </Head>
    {/* 公共头部 */}

    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col xs={24} sm={24} md={16} lg={18} xl={14}  >
        左侧
      </Col>

      <Col xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>
    {/* 公共底部 */}
    <Footer />
  </>
)

export default List