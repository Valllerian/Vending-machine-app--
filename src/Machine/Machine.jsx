import React from 'react'
import { Link } from "react-router-dom";
import Message from '../Message/Message';
import vendingMachineImg from "./VendingMachine.png";
import "./VendingMachine.css";

const Machine = () => {
  return (
    <div
        className='VendingMachine'
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h1>hello i am a vending machine. what would you like to eat?</h1>
        </Message>
        <Message>
          <h1>
            <Link to='/soda'>Soda</Link>
          </h1>
          <h1>
            <Link to='/chips'>Chips</Link>
          </h1>
          <h1>
            <Link to='/sardines'>Sardines</Link>
          </h1>
        </Message>
      </div>
  )
}

export default Machine