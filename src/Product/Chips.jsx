import React from 'react'
import Message from '../Message/Message';
import { Link } from "react-router-dom";

import "./Chips.css";


const Chips = () => {
  return (
    <div className='Chips'>
        <Message>
          <h1>
            <Link to='/'>Go Back</Link>
          </h1>
        </Message>
        
      </div>
  )
}

export default Chips