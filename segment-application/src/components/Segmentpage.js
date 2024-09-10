import React from 'react'
import Button from 'react-bootstrap/Button';
import './Segmentpage.css';

const Segmentpage = () => {

    const segmentHadler =()=>{
        alert('hello ghuru');
    }
  return (
    <div className='main-container'>
       <Button variant="outline-light" onClick={segmentHadler}>Save segment</Button>
    </div>
  )
}

export default Segmentpage
