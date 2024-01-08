import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Job from '../components/Job'
import Assemblies from '../components/Assemblies'

function HomeAssemblies() {
  return (
    <>
    <Row style={{background:'#EEFAFF',height:'89vh',width:'100%'}}>

      <Col sm={12} md={1} >
      <SideBar/>
      </Col>

      <Col sm={12} md={4} >
       
        <Assemblies/>
      
      </Col>

      <Col sm={12} md={7}>
      <Job/>
      </Col>

    </Row>
</>
  )
}

export default HomeAssemblies