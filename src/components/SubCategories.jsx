import React from 'react'
import { ImArrowRight } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { ImArrowLeft } from "react-icons/im";
import { Link } from 'react-router-dom';

function SubCategories() {
  return (
    <>
      <div className="d-flex mt-4 mb-3">
        <Link to={'/'}><ImArrowLeft className='mt-2 me-2' style={{color:'black'}} /></Link>
        <h4 style={{ fontWeight: '600' }}>Sub Categories</h4>
        <div className="ms-auto d-flex align-items-center  rounded w-50">
          <CiSearch style={{ width: '2.5rem' }} />
          <input className='form-control text-muted' placeholder="Search Categories" />
        </div>
      </div>

      <div className='card shadow'>
        <div className="d-flex align-items-center p-2 mt-2">
          <h6 className='text-secondary me-4'>SL NO</h6>
          <h6 className='text-secondary'>Name</h6>
          <h6 className='ms-auto text-secondary me-5'>Type</h6>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Recessed Fluorescent</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Recessed Incandescent</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Surface Incandescent</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Recessed HO</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Surface HO</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Exit & Emergency</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Fans & Miscellaneous</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Spec Fixtures ( Type A....)</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-2">
          <h6 className=' ms-1 me-5 mt-1'>1</h6>
          <h6 className='ms-3 mt-1'>Fixture Connections</h6>
          <h6 className='ms-auto me-4 mt-1'>C</h6>
          <Link to={'/homeassemblies'}><ImArrowRight className='me-4' style={{ color: 'blue' }} /></Link>
        </div>
        <div className="border d-flex align-items-center p-4">
        </div>
        <div className="border d-flex align-items-center p-4">
        </div>
     

      </div>
    </>
  )
}

export default SubCategories