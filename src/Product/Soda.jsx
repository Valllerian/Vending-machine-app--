import React from 'react'
import Message from '../Message/Message';
import { Link } from "react-router-dom";

import "./Soda.css";

const Soda = () => {
  return (
    <div className='Soda'>
    <Message>
      <h1>
        <Link to='/'>Go Back</Link>
      </h1>
    </Message>
  </div>
  )
}

export default Soda