import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Categories from '../components/Categories'
import SideBar from '../components/SideBar'

function Home() {
  return (
    <>
        <Row style={{background:'#EEFAFF',height:'89vh'}}>

          <Col sm={12} md={1} >
          <SideBar/>
          </Col>

          <Col sm={12} md={4} >
          <Categories/>
          </Col>

          <Col sm={12} md={7} style={{background:'yellow'}}>
          <h1>right</h1>
          </Col>

        </Row>
    </>
  )
}

export default Home