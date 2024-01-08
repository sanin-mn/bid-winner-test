import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Job from '../components/Job'
import SubCategories from '../components/SubCategories'

function HomeSub() {
  return (
    <>
    <Row style={{background:'#EEFAFF',height:'89vh',width:'100%'}}>

      <Col sm={12} md={1} >
      <SideBar/>
      </Col>

      <Col sm={12} md={4} >
       
        <SubCategories/>
      
      </Col>

      <Col sm={12} md={7}>
      <Job/>
      </Col>

    </Row>
</>
  )
}

export default HomeSub