import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Categories from '../components/Categories'
import SideBar from '../components/SideBar'
import Job from '../components/Job'


function Home() {

  return (
    <>
        <Row style={{background:'#EEFAFF',height:'89vh',width:'100%'}}>

          <Col sm={12} md={1} >
          <SideBar/>
          </Col>

          <Col sm={12} md={4} >
           
            <Categories />
          
          </Col>

          <Col sm={12} md={7}>
          <Job/>
          </Col>

        </Row>
    </>
  )
}

export default Home