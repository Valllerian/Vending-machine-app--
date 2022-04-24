import React from 'react'
import Message from '../Message/Message';
import { Link } from "react-router-dom";

import "./Sardines.css";

const Sardines = () => {
  return (
    <div className='Sardines'>
    <Message>
      <h1>
        <Link to='/'>Go Back</Link>
      </h1>
    </Message>
  </div>
  )
}

export default Sardines